const translate = require('@vitalets/google-translate-api');
// const {HttpProxyAgent}  = require('http-proxy-agent');


// const agent = new HttpProxyAgent('http://203.115.101.61');

async function translateText(text , targetLang){
   try{
      if (!text) return ''; // Handle empty strings
      // const res = await translate.translate(text , {to:targetLang , fetchOptions: { agent }});
      const res = await translate.translate(text , {to:targetLang });
      return res.text;
   }catch (error) {
      console.error('Translation Error:', error);
      throw error;
   }
}

module.exports = {translateText}