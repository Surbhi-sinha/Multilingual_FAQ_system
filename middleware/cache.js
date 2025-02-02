const redis = require('redis');
const client = redis.createClient();
client.connect();

const cacheMiddleware = async(req,res,next)=>{
   const {lang = 'en'}= req.query;
   client.get(`faqs:${lang}` , (err,data)=>{
      if(data) return res.json(JSON.parse(data));
   })
   next();
}

module.exports = {cacheMiddleware , client};