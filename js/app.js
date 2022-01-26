function input (){
var name = window. prompt("Enter your name: ");
var ginder = window. prompt("Enter your ginder: ");
 condection(name, ginder);

}
function condection(name, ginder){
if(ginder=="male"){
    var age = window. prompt("Enter your age: ");
    if(Number(age)>=0){
        alert("Your name is " + name);
        confirm("to skip the welcoming MR  "+name +"\nEither OK or Cancel.");
        var like = window. prompt("are you like the page? ");  
        var used = window. prompt("are you used this page before ? ");
        var ag = window. prompt("do you have a brother or sister? ");   
      if(like==""&& used==""&&ag==""){
        let arr=[like,used,ag];
        console.info(" invalid string");
    }
     else if(like=="yes"|| used=="yes"||ag=="yes")
     {
      let arr=[like,used,ag];
      for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
           }
      console.info(like,used,ag);
    }
     
    
    }

    }
else if(ginder=="female"){
    var age = window. prompt("Enter your age: ");
    if(Number(age)>=0){
        alert("Your name is " + name);
        confirm("to skip the welcoming ms  "+name +"\nEither OK or Cancel.");
        var like = window. prompt("are you like the page? ");  
        var used = window. prompt("are you used this page before ? ");
        var ag = window. prompt("do you have a brother or sister? ");   
      if(like==""&& used==""&&ag==""){
        let arr=[like,used,ag];
        console.info(" invalid string");
        
    }
     else if(like=="yes"|| used=="yes"||ag=="yes")
     {
      let arr=[like,used,ag];
      for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
           }
      console.info(like,used,ag);
    }
    
    }

       
   }
   else{
       var age = window. prompt("Enter your age: ");
    if(Number(age)>=0){
        alert("Your name is " + name);
        confirm("to skip the welcoming   "+name +"\nEither OK or Cancel.");
        var like = window. prompt("are you like the page? ");  
        var used = window. prompt("are you used this page before ? ");
        var ag = window. prompt("do you have a brother or sister? ");   
      if(like==""&& used==""&&ag==""){
        let arr=[like,used,ag];
        console.info(" invalid string");
    }
     else if(like=="yes"|| used=="yes"||ag=="yes")
     {
      let arr=[like,used,ag];
      for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
           }
      console.info(like,used,ag);
    }
    
    

    }

    }
  }
  input();
