//initialize array for saving users
var allUsers;

$(document).ready(function(){
    
    var allUsers = new Array();
    var defaultUser = {
        name:"p",
        password:"p"
    };
    //allUsers.push(defaultUser);

    //check if the default user exist in the array
    if(containUser(defaultUser)==false){
      allUsers = JSON.parse(localStorage.getItem("allUsers"));
      allUsers.push(defaultUser);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    if(localStorage.getItem("allUsers"==null)){
        localStorage.setItem("allUsers",JSON.stringify(allUsers));
    }
})

//check if localStorage contain this user
function containUser(checkUser){
 
  let array = JSON.parse(localStorage.getItem("allUsers"));
  for(let i=0; i<array.length; i++ ){
      if(array[i].userName==checkUser.userName && array[i].userPassword==checkUser.userPassword){
          return true;
        }
  }
  return false;
}

//add uder to localStorage array of users
function addUser(user){
  if(containUser(user)==false){
    allUsers = JSON.parse(localStorage.getItem("allUsers"));
    allUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }
}


//kind of changeWindow
function moveTo(id){

  let section = document.getElementsByTagName('section');

    for(i=0; i<section.length; i++){
            section[i].style.display = 'none';
    }
    
    document.getElementById(id).style.display = "block";

}