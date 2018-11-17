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

//
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


//scrolll effect
$(function() {
    $('.scrollEffect h2', '.scrollEffect h2::before', '.scrollEffect h2::after').css('opacity', '0');
    $(window).scroll(function(){
        $(".scrollEffect").each(function(){
            const position = $(this).offset().top();
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();

            if(scroll > position - windowHeight + windowHeight / 5) {
                $("h2, h2::before, h2::after", this).css('opacity', '1');
            } else {
                $("h2, h2::before, h2::after", this).css('opacity', '0');
            }
        })
    })
});


