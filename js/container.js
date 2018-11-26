//add container by browser size
document.addEventListener('DOMContentLoaded', function(){
    const pcSize = window.matchMedia('screen and (min-width: 1000px)');
    const widthMargin = document.getElementById("js-container");

    function checkBreakPoint(pcSize) {
        if(pcSize.matches) {
            widthMargin.classList.add('container');
            // widthMargin.classList.remove('works__thumbnails');
        }else {
            // widthMargin.classList.add('works__thumbnails');
            widthMargin.classList.remove('container');
        }
    }

    pcSize.addListener(checkBreakPoint);

    checkBreakPoint(pcSize);
});