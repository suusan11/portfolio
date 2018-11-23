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
// function navToggle() {
//     var toggleBtn = document.getElementById("js-nav-toggle");
//     var navShow = document.getElementById("js-circle-nav-list");
//
//     if(toggleBtn.classList.contains("open") === false) {
//         toggleBtn.classList.add("open");
//         navShow.classList.add("open");
//     }else {
//         toggleBtn.classList.remove("open").add("close");
//         // toggleBtn.classList.add("close");
//         navShow.classList.remove("open");
//     }
//
// document.getElementById("js-nav-toggle").addEventListener("click", navToggle);


//show name
// $(window).scroll(function(){
//     var t = $('.form').offset().top; // ターゲットの位置取得
//     var p = t - $(window).height();  // 画面下部からのターゲットの位置
//     if($(window).scrollTop() > p){
//         $('.button').hide(); // ボタンを非表示
//     }else{
//         $('.button').show(); // ボタンを表示
//     }
// });

//get scroll position
// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };
//
// const breakPointText = document.getElementById('.js-breakPoint');
// const scrollShow = document.getElementById('js-scroll-show');
//
// function checkSlide() {
//     breakPointText.forEach(breakPointText => {
//         const slideInAt = (window.scrollY + window.innerHeight) - breakPointText.height / 2;
//         const textBottom = breakPointText.offsetTop + breakPointText.height;
//         const isHalfShown = slideInAt > breakPointText.offsetTop;
//         const isNotScrolledPast = window.scrollY < textBottom;
//         if (isHalfShown && isNotScrolledPast) {
//             scrollShow.classList.add('active');
//         } else {
//             scrollShow.classList.remove('active');
//         }
//     });
// }
//
// window.addEventListener('scroll', debounce(checkSlide));



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

// function addContainer() {
//     const pcSize = window.matchMedia('screen and (min-width: 1000px)');
//     const widthMargin = document.getElementById("js-container");
//
//     function checkBreakPoint(pcSize) {
//         if(pcSize.matches) {
//             widthMargin.classList.add('container');
//             widthMargin.classList.remove('works__thumbnails');
//         }else {
//             widthMargin.classList.add('works__thumbnails');
//             widthMargin.classList.remove('container');
//         }
//     }
//     pcSize.addListener(checkBreakPoint);
//     checkBreakPoint(pcSize);
// }
//
// document.getElementById('js-container').addEventListener("DOMContentLoaded", addContainer);


