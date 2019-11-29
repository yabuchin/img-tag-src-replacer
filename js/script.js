const beforeImgSrc = './img/before.png';
const afterImgSrc = './img/after.png';
/*
const keyFrameCSS = ` 
    @keyframes fadein {
      from {
        opacity:0;
      }
      to {
        opacity:1;
      }
    }`;

const animationCSS = `
    img[src="${beforeImgSrc}"] {
      animation: fadein .5s step-end;
    }`;

document.styleSheets.item(0).insertRule(keyFrameCSS, 0);
document.styleSheets.item(0).insertRule(animationCSS, 0);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const beforeImg = document.querySelector(`img[src="${beforeImgSrc}"]`);
    beforeImg.setAttribute('src', afterImgSrc);
    document.styleSheets.item(0).deleteRule(0);
    document.styleSheets.item(0).deleteRule(0);
  }, 50);
});
*/
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const beforeImg = document.querySelector(`img[src="${beforeImgSrc}"]`);
    beforeImg.setAttribute('src', afterImgSrc);
  }, 50);
});