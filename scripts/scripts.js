//Nav Bar Switcher Mobile/Desktop
const toggleBtn = document.querySelector(".toggle_btn")
const toggleBtnIcon = document.querySelector(".toggle_btn i")
const dropDownMenu = document.querySelector(".navbar-mobile")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("navShow")
    const isNavShow = dropDownMenu.classList.contains("navShow")

    toggleBtnIcon.classList = isNavShow
        ? "fa-solid fa-xmark" :
        "fa-solid fa-bars";
}

// Footer Set Year
const ftDate = document.getElementById('ftDate');
ftDate.innerHTML = new Date().getFullYear();