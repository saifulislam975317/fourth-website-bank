
// deposit function area

function getInputValue(inputId){
    const inputTk= document.getElementById(inputId);
    const inputGetValue= inputTk.value;
    const inputGetValueNum= parseFloat(inputGetValue)
    inputTk.value='';
    return inputGetValueNum;
    
}

function totalAmount(totalId, inputGetValueNum){
  const depositTk = document.getElementById(totalId);
  const previousDepositTk= depositTk.innerText;
  const previousDepositTkNum= parseFloat(previousDepositTk);
  const totalDeposit= previousDepositTkNum+inputGetValueNum;
  depositTk.innerText=totalDeposit;
}

function updateBalance(inputGetValueNum, isAdd){
  const balanceTk= document.getElementById("balance");
  const balanceTkGet= balanceTk.innerText;
  const previousBalanceNum= parseFloat(balanceTkGet);
  if(isAdd==true){
    const totalBalance = previousBalanceNum+inputGetValueNum;
   balanceTk.innerText= totalBalance;
  }
  else{
    const totalBalance = previousBalanceNum-inputGetValueNum;
    balanceTk.innerText= totalBalance;
  }
  
}


// deposit area 

document.getElementById("depositBtn").addEventListener("click", function(){
    const inputGetValueNum = getInputValue("inputDeposit")
    if(inputGetValueNum>0){
      totalAmount("depositAmount", inputGetValueNum)
      updateBalance(inputGetValueNum, true)
    }
    

  })

  // withdraw area 

  document.getElementById("withdrawBtn").addEventListener("click", function(){
    const inputWithdrawValueNum = getInputValue("inputWithdraw");
    const balanceTk= document.getElementById("balance");
  const balanceTkGet= balanceTk.innerText;
  const previousBalanceNum= parseFloat(balanceTkGet);
  debugger
    if(inputWithdrawValueNum>0 && inputWithdrawValueNum<=previousBalanceNum){
      totalAmount("withdrawAmount", inputWithdrawValueNum)
      updateBalance(inputWithdrawValueNum, false);
      document.querySelector(".withdrawWarning").style.display ="none";
  
    }
    else{
      document.getElementById("withdrawMess").innerText = "Error!You have not enough money in your account."
    }
   
   })
  