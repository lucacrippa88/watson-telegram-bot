/* Function4.js
 * Prepare response of Visual Recognition to Telegram bot
 * v 1.0
 * November 2018
 */

msg.payload = {
  chatId: msg.chatId,
  type: "message",
  content: "This is a " + msg.result.images[0].classifiers[0].classes[0].class
};
return msg;
