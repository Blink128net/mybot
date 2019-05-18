/*CMD
  command: /chatuser
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

cur_user_chat = Bot.getProperty("cur_user_chat");
msg = "He Will Received : " + "\n" + data.message ;
Bot.sendMessageToChannel(cur_user_chat, msg);
