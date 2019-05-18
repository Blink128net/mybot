/*CMD
  command: /to bank
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 📤 send trx to bank
CMD*/


    let res = Libs.ResourcesLib.userRes("money");
    let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
    
    if(res.have(201)){
       if( res.exchangeTo(bank_deposit, { remove_amount: 201, add_amount: 200  }) ){
         
         let secs_in_5minutes = 1 * 60 * 5;
         bank_deposit.growth.addCompoundInterest({percent: 100, interval: secs_in_5minutes });
   
         Bot.sendMessage("Transfered TRX to bank deposit: " + 200 + "\nBank take 1TRX as commission" );
       }
     }else{
        Bot.sendMessage("You have not such TRX: " + 10);
     }
