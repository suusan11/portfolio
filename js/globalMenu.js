function navToggle() {
    var toggleBtn = document.getElementById("nav-toggle");
    var navShow = document.getElementById("nav-list");
    var toggleBtnClass = toggleBtn.getAttribute("class");

    if(toggleBtnClass == "nav-toggle-btn close") {
        toggleBtn.classList.remove("close");
        navShow.classList.remove("close");

        toggleBtn.classList.add("open");
        navShow.classList.add("open");
    }else {
        toggleBtn.classList.remove("open");
        navShow.classList.remove("open");

        toggleBtn.classList.add("close");
        navShow.classList.add("close");
    }
}

document.getElementById("nav-toggle").onclick = navToggle;