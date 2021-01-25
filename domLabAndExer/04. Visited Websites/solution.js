function solve() {
    //  In this problem, you should create a JS functionality that keeps track of how many times a
    // specific site has been visited.

    let sites = document.querySelectorAll('.link-1');
    Array.from(sites).forEach(site => {
        site.addEventListener(`click`, (ev) => {
            let paragraph = site.querySelector('p');
            let counter = paragraph.textContent.split(` `)[1];
            counter++;
            paragraph.innerHTML = `visited ${counter} times`;
        });
    });
}