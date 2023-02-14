var next=document.getElementById("next");
    var prev=document.getElementById("prev");
    var nxtNum=document.getElementById("two");
    var prevNum=document.getElementById("three");
    var current=document.getElementById("one");
    var crnt=Number(current.innerHTML);
    var nxt=Number(nxtNum.innerHTML);
    var prv=Number(prevNum.innerHTML);
    next.addEventListener("click",()=>{
      var nowN=nxt;
        if(nowN>1){
            prevN=nowN-1;
        }else{
            prevN=3;
        }
        if(nowN<3){
        nxt=nowN+1
        }else{
            nxt=1;
        }
        //to update numbers every time we click on next button
        current.innerHTML=nowN.toString();
        prevNum.innerHTML=prevN.toString();
        nxtNum.innerHTML=nxt.toString();
    });
    
    prev.addEventListener("click",()=>{
      var nowN=prevN;
        if(nowN>1){
            prevN=nowN-1;
        }else{
            prevN=3;
        }
        if(nowN<3){
        nxt=nowN+1
        }else{
            nxt=1;
        }
        //to update numbers every time we click on prev button
        current.innerHTML=nowN.toString();
        prevNum.innerHTML=prevN.toString();
        nxtNum.innerHTML=nxt.toString();
    });
