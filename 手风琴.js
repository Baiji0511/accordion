/*获取contentShow  DOM */
let contentShow = document.querySelectorAll('.content');
/*给默认的第一张图片添加宽度 */
contentShow[0].classList.add('contentUnfold');
console.log(contentShow);
/* 循环给contentShow  DOM 事件赋予点击事件*/
for (let i = 0; i < contentShow.length; i++) {
    contentShow[i].addEventListener("click", clickImg)
    function clickImg() {
        for(let j = 0;j<contentShow.length;j++){
            /*contains(class) 判断是否有这个class*/
            if(contentShow[j].classList.contains("contentUnfold")){
                contentShow[j].classList.add('contentLessen');
                contentShow[j].classList.remove('contentUnfold');
            }
        }
        contentShow[i].classList.add('contentUnfold');
    }
}
