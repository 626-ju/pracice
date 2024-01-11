
const images = [0, 1];

imagesOrder = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");//태그 만들기 

bgImage.src = `img/${imagesOrder}.png`;


document.body.appendChild(bgImage);//태그를 바디 안에 달아주기

