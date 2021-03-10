
var checkExist = setInterval(function () {
    if ($("div.nimo-rm").length && $("div.nimo-room__player__wrap").length) {
        $("div.nimo-rm").before($("div.nimo-room__player__wrap"));
        clearInterval(checkExist);
    }
}, 100);
let style = document.createElement('style');
document.body.appendChild(style);
style.innerHTML = `
        div.nimo-room__gift-shop, div.nimo-gift-banner, div.rank-item-top3, div.nimo-room__rank, .nimo-scrollbar > div.n-as-mrgb, div.nimo-room__head-img, .nimo-room__chatroom__box-gift, .nimo-room__activity { display: none; }
        span.n-as-vtm { color: #efeff1; }
        span.nm-message-nickname { color: #7c67ff !important; } 
        div.nimo-room__main { background: #0e0e10; margin-top: -5px !important;}`;