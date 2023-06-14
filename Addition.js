function extra(){
    document.getElementById("intro").style.display="flex";
    document.getElementById("B1").style.display="none";
}

function begin(){
    document.getElementById("B2").style.display="none";
    document.getElementById("ee").style.display="none";
    document.getElementById("work").style.display="block";


    const RN1= [3,9,77,5,6,92,0,4,5,50]; //random number 1
    const RN2= [4,6,87,93,45,68,21,332,45,900]; //Random number 2
    const operator=["+","-","/","*","+","*","/","-","+","*"]; //Random operator
    document.getElementById("question").innerHTML=[RN1[0]+operator[0]+RN2[0]];

    //And "question" gets updated with Random number 1 - Operator - Random number 2
}

function submit(){
    let userinp=document.querySelector("#answer").value;
    let userans=parseInt(userinp);//User's answer converted to a number just in case
    let userscor=document.querySelector("#score").innerHTML;
    let userscore=parseInt(userscor)// User's score converted to a number 
    let highscore=parseInt(document.getElementById("highscore").innerHTML);// User's high score converted to a number 

    let question=document.getElementById("question").innerHTML;
    let correctanswer=eval(question);//maybe I'll do this manually later

    let yn=userans-correctanswer;
    if (yn==0) {
        alert ("Correct :)." + "The answer is " + correctanswer)
        document.getElementById("mt").innerHTML="Yes, that is correct!";
        document.getElementById("score").innerHTML=userscore+1;
        document.getElementById("question").innerHTML= parseInt(Math.random()*100) + "+" + parseInt(Math.random()*100);
        
    } else {
        alert("Unfortunately not. Your answer was off by " + yn + ". "
         + "The correct answer is " + correctanswer)
        document.getElementById("mt").innerHTML="No, unfortunately not :(";
        document.getElementById("restart").style.display="inline";
        document.getElementById("submit").style.display="none";

        if (userscore>=highscore) {
            document.getElementById("highscore").innerHTML=userscore;
            //If current score> high score, update high score to show current score
        } else {
            document.getElementById("highscore").innerHTML=highscore;
            //Otherwise keep the high score as is
        }

        
    }

}

function restart(){
    document.getElementById("score").innerHTML= "0";
    document.getElementById("restart").style.display="none";
    document.getElementById("mt").innerHTML="";
    document.getElementById("submit").style.display="inline";

    const RN1= [3,9,77,5,6,92,0,4,5,50]; //random number 1
    const RN2= [4,6,87,93,45,68,21,332,45,900]; //Random number 2
    const operator=["+","-","/","*","+","*","/","-","+","*"]; //Random operator
    document.getElementById("question").innerHTML=[RN1[1]+operator[0]+RN2[2]];

}

