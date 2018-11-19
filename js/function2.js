/* Function9.js
 * Prepare message to be sent to Telegram bot
 * v 1.0
 * November 2018
 */

var outputMsg = "";
	if(msg.payload.output.text) {
    		for(i=0;i<msg.payload.output.text.length;i++){
        			outputMsg += msg.payload.output.text[i] +"\n"
    		}
	}
msg.payload = {
  	chatId : msg.chatId,
  	type : "message",
  	content : outputMsg
};
return msg;
