//text effect for name on top
var fullName = document.getElementsByTagName('h1')[0];

function textEffect(animationName) {
    let text = fullName.innerHTML;
    let newText = '';
    let animation = animationName;

    for(let i = 0; i < text.length; i++) {
        newText += '<span>' + text.charAt(i) + '</span>';
    }

    fullName.innerHTML = newText;

    var wrappedChars = document.getElementsByTagName('span');
    let j = 0;

    function addEffect() {
        setTimeout(function () {
            wrappedChars[j].className = animation;
            j += 1;
            if(j < wrappedChars.length) {
                addEffect();
            }
        }, 100);
    }
    addEffect();
}
textEffect('fallDown');


//global menu
function navToggle() {
    var toggleBtn = document.getElementById("js-nav-toggle");
    var navShow = document.getElementById("js-global-nav-list");

    if (toggleBtn.classList.contains("open") === false) {
        toggleBtn.classList.add("open");
        navShow.classList.add("open");
    } else {
        toggleBtn.classList.remove("open");
        navShow.classList.remove("open");
    }

    var tagA = document.getElementById("js-global-nav-list").getElementsByTagName('a');
    for(let i = 0; i < tagA.length; i++) {
        tagA[i].addEventListener("click", navToggle);
    }
}

document.getElementById("js-nav-toggle").addEventListener("click", navToggle);


//get scroll position
function scrollCheck() {
    const scrollValue = window.scrollY;//上からのスクロール値
    const headerHeight = document.getElementById('js-header').clientHeight; //headerの高さをとる
    const scrollTotal = scrollValue + headerHeight; //headerを含んだ高さの取得

    const breakPoint = document.getElementById('js-breakPoint').clientHeight; //objectの高さ
    const objectTop = document.getElementById('js-breakPoint').offsetTop; //objectの座標高さ
    const breakPointTotall = breakPoint + objectTop;

    const textShow = document.getElementById('js-scroll-show');
    const expand = document.getElementById('js-logo-container');
    const navHide = document.getElementById('js-nav-container');

    if(scrollTotal > breakPointTotall) {
        textShow.classList.add('is-show');
        expand.classList.add('is-expand');
        navHide.classList.add('is-hide');
    }else {
        textShow.classList.remove('is-show');
        expand.classList.remove('is-expand');
        navHide.classList.remove('is-hide');
    }
}

window.addEventListener('scroll', scrollCheck);



//add container by browser size
document.addEventListener('DOMContentLoaded', function(){
    const pcSize = window.matchMedia('screen and (min-width: 1000px)');
    const widthMargin = document.getElementById("js-container");

    function checkBreakPoint(pcSize) {
        if(pcSize.matches) {
            widthMargin.classList.add('container');
            widthMargin.classList.remove('works__thumbnails');
        }else {
            widthMargin.classList.add('works__thumbnails');
            widthMargin.classList.remove('container');
        }
    }

    pcSize.addListener(checkBreakPoint);

    checkBreakPoint(pcSize);
});

//for IE
if (!window.console){
    window.console = {
        log : function(msg){
            // do nothing.
        }
    };
}

