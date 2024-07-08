function getOptions() {

    const options = document.querySelectorAll('#mySelect option');
    const arrOfOptions = Array.from(options)
    .map((option) => option.textContent)
    .join(', ');
    alert(`Opitons: ${arrOfOptions}\nOptions count: ${options.length}`);
}