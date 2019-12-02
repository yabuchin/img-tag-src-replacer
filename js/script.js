const beforeImgSrc = './img/before.png';
const afterImgSrc = './img/after.png';

const animationName = `fadein_${Math.random().toString().substring(2)}`;

const keyFrameCSS = ` 
    @keyframes ${animationName} {
      from {
        opacity:0;
      }
      to {
        opacity:1;
      }
    }`;

const animationCSS = `
    img[src="${beforeImgSrc}"] {
      animation: ${animationName} .5s step-end;
    }`;

document.styleSheets.item(0).insertRule(keyFrameCSS, 0);
document.styleSheets.item(0).insertRule(animationCSS, 0);

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const beforeImg =
      document.querySelector(`img[src="${beforeImgSrc}"]`);
    beforeImg.setAttribute('src', afterImgSrc);

    // 書き換え後にCSSルールの削除を行う
    // 非同期で別のjsからルールが挿入されることを想定して、ruleのcssTextを検索して削除する
    const styleSheets = document.styleSheets.item(0);
    for (let i = styleSheets.rules.length-1; i >= 0; i--) {
      const rule = styleSheets.rules[i];
      if (rule.cssText.indexOf(animationName) >= 0) {
        styleSheets.deleteRule(i);
      }
    }
  }, 10);
});
