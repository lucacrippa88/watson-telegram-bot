/* Function6.js
 * Prepare response of Watson Translate to Telegram bot
 * v 1.0
 * November 2018
 */

msg.payload = {
  chatId: msg.chatId,
  type: "message",
  content: msg.payload
};
return msg;
