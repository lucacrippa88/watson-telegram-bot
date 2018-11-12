/* Function1.js
 * Initialize Telegram bot messages
 * v 1.0
 * November 2018
 */

msg.chatId = msg.payload.chatId;
msg.user = msg.payload.chatId;
msg.payload = msg.payload.content;
return msg;
