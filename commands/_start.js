/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  answer: Kami menguji bot ini untuk Scam 😂
  keyboard: 👤 Account,\n,💰 Deposit,💵 Withdraw,\n, 📤 Send Trx To Bank,📥 Take Trx From Bank, 👥 Referral
  aliases: 
CMD*/

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You Have New Referral: @" + user.username +
Libs.ResourcesLib.userRes("bank_deposit").add(2) 
) }

function doAlreadyAttracted(){
  Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

Bot.sendMessage(
"Hello @" + user.username + "/" + user.telegramid 
)
