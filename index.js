document.getElementById("loginBtn").addEventListener("click", function(){
    const emailInput = document.getElementById("emailInput").value;
    const passwordInput=document.getElementById("passwordInput").value;

    if(emailInput=="prince.saiful@gmail.com" && passwordInput=="saiful123"){
        window.location.href="banking.html"
    }
    else{
        document.getElementById("warningMess").innerText="Error! Invalid email or Password"
    }


})