function getAttributes() {

    const anchorTag = document.getElementById('someId');
    const hrefAttribute = anchorTag.getAttribute('href');
    const hrefAttributeLang = anchorTag.getAttribute('hreflang');
    const relAttribute = anchorTag.getAttribute('rel');
    const targetAttribute = anchorTag.getAttribute('target');
    const typeAttribute = anchorTag.getAttribute('type');

    console.log(`href: ${hrefAttribute}\nhreflang: ${hrefAttributeLang}\nrel: ${relAttribute}\ntarget: ${targetAttribute}\ntype: ${typeAttribute}`);
}