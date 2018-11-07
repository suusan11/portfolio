function addContainer() {
    const x  = window.width();
    const y = 999;

    if(x > y) {
        document.getElementById("js-container").classList.add("container");
    }
}
addContainer();