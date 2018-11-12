/* Function3.js
 * Prepare Visual Recognition Telegram bot
 * v 1.0
 * November 2018
 */

msg.chatId = msg.payload.chatId;
msg.payload = msg.payload.weblink;
return msg;
