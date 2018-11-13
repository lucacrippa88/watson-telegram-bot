/* Function5.js
 * Prepare for Watson Translator to Telegram bot
 * v 1.0
 * November 2018
 */

 msg.srclang = getLanguage(msg.payload.context.source);
 msg.destlang = getLanguage(msg.payload.context.destination);
 msg.payload = msg.payload.input.text;

 return msg;

 function getLanguage(lang){
   switch(lang){
     case "French": return "fr";
     case "Italian": return "it";
     case "Spanish": return "es";
   }
   return "en";
 }
