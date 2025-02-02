const express = require("express");
const router = express.Router();
const Faq  =  require('../models/Faq');
const {cacheMiddleware , client} = require('../middleware/cache');
const {translateText} = require("../utils/translate");
const {authenticate , authorization} =  require("../middleware/authMiddleware")

const Bottleneck = require('bottleneck');
const { json } = require("sequelize");

const limiter = new Bottleneck({
   minTime : 1500
})

//wrapping the translation funtion in th rate limiter
const limitedTranslate =  limiter.wrap(translateText);


router.get('/' , cacheMiddleware , async (req,res) =>{
   try{
      const {lang = 'en'} = req.query;
      const faqs = await Faq.findAll();
      const translatedFaqs = await Promise.all(
         faqs.map(async (faq) =>{
            const cacheKey = `faq_${faq.id}_${lang}`;

            // check if the translation is in redis
            const cacheTranslation = await client.get(cacheKey);
            if(cacheTranslation) {
               return JSON.parse(cacheTranslation);
            }

            //Translate if not in redis
            const translationQuestion = await limitedTranslate(faq.question , lang);
            const translateAnswer = await limitedTranslate(faq.answer , lang);

            const tranlatedFaq = {
               id : faq.id,
               question : translationQuestion,
               answer : translateAnswer
            }
            await client.set(cacheKey , JSON.stringify(tranlatedFaq))
            return tranlatedFaq;
         })
      )
      res.json(translatedFaqs);  

   }catch(err){
      console.log(err)
      return res.json({error : err.message})
   }
})

router.post('/', authenticate , authorization , async(req,res) =>{
   const {question,answer,language} = req.body;
   const newFaq = await Faq.create({question , answer, language});
   res.status(201).json(newFaq);
})

module.exports = router;