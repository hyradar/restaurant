// For explanation, watch https://www.youtube.com/watch?v=S-VeYcOCFZw

document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropDown;
    if (isDropDownButton) {
        currentDropDown = document.querySelector('.dropdown');
        currentDropDown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropDown) return
        dropdown.classList.remove('active')
    })
});