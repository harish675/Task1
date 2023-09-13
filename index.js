function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    dropdownMenu.classList.toggle('show');
    
    var allDropdowns = document.querySelectorAll('.dropdown-menu');
    allDropdowns.forEach(function (menu) {
        if (menu !== dropdownMenu) {
            menu.classList.remove('show');
        }
    });
}


window.addEventListener('click', function (event) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) {
            var dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.remove('show');
        }
    });
});


