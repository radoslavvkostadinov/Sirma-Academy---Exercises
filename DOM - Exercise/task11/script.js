function highlight() {
    const boldWords = document.querySelectorAll('p > span');
    Array.from(boldWords).map(word => word.style.fontWeight = 'bold');
}


function reset() {
    const boldWords = document.querySelectorAll('span.highlight');
    Array.from(boldWords).map(word => word.style.fontWeight = '');
}