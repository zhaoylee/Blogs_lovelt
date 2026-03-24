/* 返回随机颜色 */
function randomColor() {
    return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
}

/* 点击生成字符特效 (原生 JS 版，无需 jQuery) */
var a_idx = 0;
var a_click = 1;
/* 生成的字符内容 */
var a = ["乀(ˉεˉ乀)","𓂃𓂃𓂃𓊝𓄹𓄺𓂃𓂃𓂃","˘ᗜ˘","(╥╯^╰╥)","╰(*´︶`*)╯","✧(◍˃̶ᗜ˂̶◍)✩","｡◕‿◕｡",
"(๑ت๑)","(๑❛ᴗ❛๑)","w(ﾟДﾟ)w","Σ( ° △ °|||)︴","(⊙ˍ⊙)","(๑ˉ∀ˉ๑)","<(￣︶￣)>","╰(*°▽°*)╯","✿",
"(,,•́ . •̀,,)","վ'ᴗ' ի","(◔◡◔)","⚝","₍ᐢ. ֑ .ᐢ₎"];

document.addEventListener('click', function(e) {
    /* 点击频率，点击几次就换文字 */
    var frequency = 2;
    if (a_click % frequency === 0) {
        var span = document.createElement("span");
        span.textContent = a[a_idx];
        a_idx = (a_idx + 1) % a.length;

        var x = e.pageX, y = e.pageY;

        // 设置初始样式
        span.style.zIndex = 9999;
        span.style.top = (y - 20) + "px";
        span.style.left = x + "px";
        span.style.position = "absolute";
        span.style.fontWeight = "bold";
        span.style.color = randomColor();
        span.style.userSelect = "none";
        span.style.pointerEvents = "none"; // 防止特效阻挡点击链接
        span.style.transition = "all 1.5s ease-out"; // 动画过渡效果
        span.style.opacity = 1;

        document.body.appendChild(span);

        // 触发向上漂浮和渐隐动画
        setTimeout(function() {
            span.style.top = (y - 180) + "px";
            span.style.opacity = 0;
        }, 10);

        // 动画结束后清理垃圾节点，防止页面卡顿
        setTimeout(function() {
            if (span.parentNode) {
                span.parentNode.removeChild(span);
            }
        }, 1500);
    }
    a_click++;
});