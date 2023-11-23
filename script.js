document.getElementById("button").addEventListener("click" ,function(){
   document.getElementById("modal").classList.add("open")
});
document.getElementById("close_modal").addEventListener("click" ,function(){
    document.getElementById("modal").classList.remove("open")
 });

window.addEventListener('keydown',(e)=>{
  if(e.key==="Escape"){
     document.getElementById("modal").classList.remove("open")
  }
});

var message = document.getElementById("input");
document.getElementById("buttonOk").addEventListener("click", function() {
    console.log( message.value );
});