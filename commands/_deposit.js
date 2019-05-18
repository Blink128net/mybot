/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
Deposit To:
`TWX6tTQAQ1X6MionAf11cPTJEcDm4vPro5`
  ANSWER
  keyboard: 
  aliases: 💰 deposit
CMD*/

Bot.sendMessage(
"Minimum deposit of 200 trx for deposit, please add a note for a valid "
)
Bot.sendMessage(
"Your Note Is: `" + user.username + "/" + user.telegramid + "`"
)
