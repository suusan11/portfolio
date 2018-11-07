//global menu
function navToggle() {
    var toggleBtn = document.getElementById("js-nav-toggle");
    var navShow = document.getElementById("nav-list");

    if(toggleBtn.classList.contains("open") === false) {
        toggleBtn.classList.add("open");
        navShow.classList.add("open");
    }else {
        toggleBtn.classList.remove("open");
        navShow.classList.remove("open");
    }
}

document.getElementById("js-nav-toggle").addEventListener("click", navToggle);


//add class container
function addContainer() {
    const widthMargin = document.getElementById("js-container");
    const windowSize  = window.innerWidth;
    const breakPoint = 1000;

    if(windowSize >= breakPoint) {
        widthMargin.classList.add("container");
        widthMargin.classList.remove("works__thumbnails");
    }
    else {
        widthMargin.classList.add("works__thumbnails");
        widthMargin.classList.remove("container");
    }
}

window.addEventListener("resize", addContainer);