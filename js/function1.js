msg.chatId = msg.payload.chatId;
msg.payload = msg.payload.content;
return msg;
