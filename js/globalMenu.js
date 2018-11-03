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

