/*CMD
  command: /chatadmin
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var admin_chat = Bot.getProperty("admin_chat");
if(admin_chat){
  cur_user = "`@" + user.username + "`";
  msg = "Message from: " + cur_user + "\n" + message + "\n/chatuser";
  Bot.setProperty("cur_user_chat", chat.chatid, "string");
  Bot.setProperty("cur_user", cur_user, "string");
  Bot.sendMessageToChatWithId(admin_chat, msg);

}else{
   Bot.sendMessage("Sorry. Bot have not admin now");
}
