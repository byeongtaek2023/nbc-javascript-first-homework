const divNum = document.querySelectorAll("div");

function a () {
for(let i=0 ; i< divNum.length; i++ ){
   let a = +(divNum[i].textContent) + 10;
   divNum[i].textContent = a 
}};

a ();