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