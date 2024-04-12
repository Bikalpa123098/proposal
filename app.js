let image=document.querySelector(".image");
let no=document.querySelector("#no");
let yes=document.querySelector("#yes");
let question=document.querySelector("#question");
let click=0;
let x;
let y;

yes.addEventListener("click",()=>{
    
    image.src="end.jpg"
    question.innerHTML="Thank you for loving me"
})


if(click==0){
    image.src="start.jpg"
    question.innerHTML="Do yo love me?"
    click++;
    }
no.addEventListener("click",()=>{
  
    if(click==1){

        image.src="really.jpg"
        question.innerHTML="Please love me yrr?"
      
        }
    if(click==2){
        image.src="please.jpg"
        question.innerHTML="You gonna love me?"
        // no.style.position='absolute'
      
        }
    if(click==3){
        image.src="please.jpg"
        question.innerHTML="You gonna love me?"
        no.style.position='fixed'
        x=Math.random()*30;
        y=Math.random()*30;
        no.style.top=`${x}rem`;
        no.style.right=`${y}rem`;
       
        }
      console.log(click)
      click++
})
no.addEventListener("mouseover",()=>{
    if(click>=3){
        no.style.position='fixed'
x=Math.random()*30;
y=Math.random()*50;
z=Math.random()*50;
no.style.top=`${x}rem`;
no.style.right=`${y}rem`;
no.style.left=`${z}rem`;
console.log("hi")
console.log(x)
    }
})