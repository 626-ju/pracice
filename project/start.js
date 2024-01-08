const title = document.querySelector(".hello h1:first-child ");
//1. innerText와 textContent 차이가 뭘까?
console.dir(title);
console.log(title);
//2.console.log를 쓰면 어쩔때는 태그의 모습을 보여주고 <h1 id ="mainTitle">practice</h1>
//어쩔때는 h1#mainTitle로 보여주는데 왜 그런걸까?

//3.first-child가 뭐야?



//console.dir(document.querySelector("#mainTitle")); // 메인타이틀이란 아이디 자세히 보기
//console.log(document.querySelector(".hello")); // 헬로우란 클래스 자세히 보기




document.querySelector(".hello").addEventListener("click",titleClick);


function titleClick(){
  console.log("title was clicked");
}



function titleMouseEnter(){
  console.log("Entered");
}
const titleMouseleave = function(){
  console.log("leaved");
}

document.querySelector("#mainTitle").addEventListener("mouseenter", titleMouseEnter);

document.querySelector("#mainTitle").onmouseleave = titleMouseleave;