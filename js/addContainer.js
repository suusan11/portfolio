function addContainer() {
    const widthMargin = document.getElementById("js-container");
    const windowSize  = window.innerWidth;
    const breakPoint = 1000;

    if(windowSize >= breakPoint) {
        widthMargin.classList.add("container");
    }
}

window.addEventListener("resize", addContainer);