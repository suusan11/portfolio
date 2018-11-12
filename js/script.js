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

document.getElementById("js-nav-toggle").addEventListener("click", navToggle);


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