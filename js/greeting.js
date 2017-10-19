(function(){

  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let getHeader = document.getElementById("my-header");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
	getHeader.innerHTML = userName.value;
    ev.preventDefault();
  }
  
  function BoldText(ev){
    myName.style.fontWeight = "bold";
	ev.preventDefault();
  }
 
  getName.addEventListener("submit", PerformGreeting);
  myName.addEventListener("mouseover", BoldText);

  
}());
