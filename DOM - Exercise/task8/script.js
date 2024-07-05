function removecolor() {
    
    const dropDownMenu = document.getElementById('colorSelect').children;
    dropDownMenu[0].remove();

    if (dropDownMenu.length === 0) {
        alert('Dropdown menu is empty!')
    }
}