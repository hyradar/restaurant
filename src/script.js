// For explanation, watch https://www.youtube.com/watch?v=S-VeYcOCFZw

document.addEventListener('click', e => {
    let currentDropDown;
    const isDropDownButton = e.target.matches("[data=dropdown-button]");

    // Makes sure not to close dropdown if user clicks inside it
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) {
        return;
        
        //Closes Dropdown if Window is Clicked
        //added the check against mobile menu button since both this if and the Toggle if's were firing simultaneously
    } else if (window && e.target.closest('[data-dropdown]') === null && e.target.closest('.dropdown-menu') === null && e.target.closest('.mobilemenubutton') === null) {
        currentDropDown = document.querySelector('.dropdown');
        currentDropDown.classList.remove('active');
        console.log('window firing');
    };
    
    //Toggles dropdown if button is clicked
    if (isDropDownButton) {
        currentDropDown = document.querySelector('.dropdown');
        currentDropDown.classList.toggle('active');
        console.log('dropdownriring');
    }

    //This code doens't appear to do anything, but didn't want to delete it yet
    // document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
    //     if (dropdown === currentDropDown) return
    //     dropdown.classList.remove('active')
    // })  
});