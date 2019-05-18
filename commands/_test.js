/*CMD
  command: /test
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

bot.forwardMessage(chats[tag]['id'], chat_id, msg['message_id'])
