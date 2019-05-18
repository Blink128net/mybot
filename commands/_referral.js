/*CMD
  command: /referral
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 👥 referral
CMD*/

let parther_link=Libs.ReferralLib.currentUser.getRefLink("TrxBankBot");
Bot.sendMessage(parther_link);

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(i in refList){
    user = refList[i];
    msg+= "\n 👤 `" +  user.first_name + " @" + user.username + "`";
  }
}else{
  msg = "No any affiliated users";
}
Bot.sendMessage(msg);

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
 
Bot.sendMessageToChatWithId(refUser.chatId, 
    "You Have New Referral: @" + user.username 
) }

Bot.sendMessage(
"to see top referrals type /top")

