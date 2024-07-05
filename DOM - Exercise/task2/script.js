function getFormvalue(event) {
    event.preventDefault();
    const firstNameValue = document.querySelector('input[name=fname]').value;
    const lastNameValue = document.querySelector('input[name=lname]').value;
    console.log(`${firstNameValue} ${lastNameValue}`);
}