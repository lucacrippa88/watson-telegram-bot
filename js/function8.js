/* Function8.js
 * Prepare output audio message to be sent to Telegram bot
 * v 1.0
 * November 2018
 */

msg.payload = {
  	chatId : msg.chatId,
  	type : "voice",
  	content : msg.speech
};
return msg;
