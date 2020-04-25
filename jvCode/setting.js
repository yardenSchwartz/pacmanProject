//left key choose
let leftChoose="";
let rightChoose="";
let downChoose="";
let upChoose="";
let isLissen=false;
function leftKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("left").innerText = "Choose Key";
        document.getElementById("left").style.background= "#ca7c6d";
        document.addEventListener("keydown", leftChoosen);   
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
        
    }
}

function leftChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==rightChoose||keyChoose==downChoose||keyChoose==upChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';
    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        leftChoose = keyChoose;
        document.getElementById("left").innerText =keyChoose;
        document.getElementById("left").style.background= "#eaada1";
        document.removeEventListener("keydown", leftChoosen);
    }
 

}


function rightKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("right").innerText = "Choose Key";
        document.getElementById("right").style.background= "#ca7c6d";
        document.addEventListener("keydown", rightChoosen);   
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
        
    }
}

function rightChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==leftChoose||keyChoose==downChoose||keyChoose==upChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';
    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        rightChoose = keyChoose;
        document.getElementById("right").innerText =keyChoose;
        document.getElementById("right").style.background= "#eaada1";
        document.removeEventListener("keydown", rightChoosen);
    }
 
}

function upKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("up").innerText = "Choose Key";
        document.getElementById("up").style.background= "#ca7c6d";
        document.addEventListener("keydown", upChoosen);   
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
        
    }
}

function upChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==rightChoose||keyChoose==downChoose||keyChoose==leftChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';

    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        upChoose = keyChoose;
        document.getElementById("up").innerText =keyChoose;
        document.getElementById("up").style.background= "#eaada1";
        document.removeEventListener("keydown", upChoosen);
    }

}


function downKeyHandling() {
    if(isLissen==false){
        isLissen=true;
        document.getElementById("keyerror").style.display='none';
        document.getElementById("down").innerText = "Choose Key";
        document.getElementById("down").style.background= "#ca7c6d";
        document.addEventListener("keydown", downChoosen);   
    }
    else{
        document.getElementById("keyerror").style.display='none';
        document.getElementById("keyerror").innerText="you have to choose key first";
        document.getElementById("keyerror").style.display='block';
    }
}

function downChoosen(e) {
    let keyChoose=e.code;
    if(keyChoose==rightChoose||keyChoose==upChoose||keyChoose==leftChoose){
        document.getElementById("keyerror").innerText="Please choose different key each";
        document.getElementById("keyerror").style.display='block';

    }
    else{
        isLissen=false      
        document.getElementById("keyerror").style.display='none';
        downChoose = keyChoose;
        document.getElementById("down").innerText =keyChoose;
        document.getElementById("down").style.background= "#eaada1";
        document.removeEventListener("keydown", downChoosen);
    }

}


function start(){
    let numOfBalls=document.getElementById(numberOfBalls);
    let gameTime=document.getElementById(choosenGameTime);
    let numberOfMonsters=document.getElementById(numberOfMonsters);

    let parts = gameTime.split(':');
    if (parts[0] < 1){

    }
    else{

    }
    if(numOfBalls>=50&&numberOfBalls<=90){

    }
    else{

    }

}

// let cpOptions = {
//     change: function(event, ui) {
//         setTimeout(function(){
//            //code you want to execute
//         },1);
//     }
// };

// $('.color-picker').wpColorPicker(cpOptions)
