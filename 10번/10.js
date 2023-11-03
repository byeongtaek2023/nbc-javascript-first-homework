function a () {
    const input = prompt( "숫자를 입력하세요 ");
    alert(input*2);
    console.log(input*2);
}


document.querySelector(".btn").addEventListener("click", a )