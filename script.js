const toogle=document.querySelectorAll(".toogle-btn")[0]

const content=document.getElementsByClassName("content")[0]


toogle.addEventListener("click",()=>{
 if(content.style.display==="none"){
   content.style.display="flex"
 }
 else{
   content.style.display="none"
 }




})
