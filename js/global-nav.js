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
}

document.getElementById("js-nav-toggle").addEventListener("click", navToggle);
document.getElementById("js-global-nav-list1").addEventListener("click", navToggle);
document.getElementById("js-global-nav-list2").addEventListener("click", navToggle);
document.getElementById("js-global-nav-list3").addEventListener("click", navToggle);
document.getElementById("js-global-nav-list4").addEventListener("click", navToggle);