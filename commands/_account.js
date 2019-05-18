/*CMD
  command: /account

  <<HELP

  HELP
  need_reply: false
  auto_retry_time: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 👤 account
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.chatRes("crystals");
let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");


Bot.sendMessage(
      "👤 Account  @" + user.username +
      "/`" + user.telegramid + 
      "`\n\n*Your Balance Is:*" +
      "\n👝 TRX Wallet: " + money.value().toFixed(4) + " TRX" +
      "\n🏧 Bank Wallet: " + bank_deposit.value().toFixed(4) + " TRX" +
      "\n\nEvery 5 minute ⏳:" +
      "\n   - added 100% To Bank Wallet" +
      
      "\n\nIterations📈: " + bank_deposit.growth.info().completed_iterations_count +
      "\n  progress: " + bank_deposit.growth.progress().toFixed(2) + "%" +
      "\n  next in: " + bank_deposit.growth.willCompletedAfter().toFixed(1) + " secs" + 
      "\n-------" +
      "\n\n*For a tip someone enters a: \n/tip UserId Amount  As Below* " +
      "\n\n`/tip " + user.telegramid + " 100 `" + 
      
      "\n\nTransfering in chat: https://t.me/trxbankpayment"
);
