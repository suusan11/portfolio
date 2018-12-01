//global menu
function navToggle() {
    var toggleBtn = document.getElementById("js-nav-toggle");
    var navShow = document.getElementById("js-global-nav-list");

    if (toggleBtn.classList.contains("open") === false) {
        toggleBtn.classList.add("open");
        navShow.classList.add("open");
    } else {
        toggleBtn.classList.remove("open");
        navShow.classList.remove("open");
    }

    var tagA = document.getElementById("js-global-nav-list").getElementsByTagName('a');
    for(let i = 0; i < tagA.length; i++) {
        tagA[i].addEventListener("click", navToggle);
    }
}

document.getElementById("js-nav-toggle").addEventListener("click", navToggle);