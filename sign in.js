let email=document.getElementById("exampleInputEmail");
let pwd=document.getElementById("exampleInputPassword");
let emailerror=document.getElementById("emailerror");
let pwderror=document.getElementById("pwderror");
let flag=0;    


function validation(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    let pwdexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 

    if(email.value.match(regexp)){
        emailerror.innerHTML="Valid";
        emailerror.style.color="green";
        flag=flag+1;
       
    }
    else{
        emailerror.innerHTML="Invalid!..Should be in the format: adcd@gmail.com";
        emailerror.style.color="red";
        flag=0;
    }

    if(pwd.value.match(pwdexp)){
        pwderror.innerHTML="Valid";
        pwderror.style.color="green";
        flag=flag+1;
       
    }
    else{
        pwderror.innerHTML="Invalid!...";
        pwderror.style.color="red";
        flag=0;
    }   

  if(flag==2){
      return true;
  }
  else{
      return false;
  }
}