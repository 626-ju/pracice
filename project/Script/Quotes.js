const quotes = [
  {
    quote: "가라 소년! 살아서 미래를 열어라!",
    author: "그라함 에이커",
  },
  {
    quote: "오랜만입니다. 핸들러 원.",
    author: "신에이 노우젠",
  },
  {
    quote: "은혼대사",
    author: "사카타 긴토키3",
  },
  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const order = Math.floor(Math.random()*quotes.length);
quote.innerText =  quotes[order].quote;
author.innerText = quotes[order]['author'];