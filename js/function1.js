msg.chatId = msg.payload.chatId;
msg.user = msg.payload.chatId;
msg.payload = msg.payload.content;
return msg;
