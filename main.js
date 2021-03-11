//分離 字串成單一字
const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")
//!------ /\S/g 用法參考[js正規表達模式]https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions

//for迴圈 對個別字逐一旋轉角度 成圓形
const element = document.querySelectorAll("span")
for(let i=0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*22+"deg)" 
    //!--- *22於此剛好成圓，字串長度會影響此值
}

//隨滑鼠移動
document.addEventListener("mousemove",function(e)
{
    text.style.left = e.pageX + "px" //!左右平移
    text.style.top = e.pageY + "px" //!上下平移
})