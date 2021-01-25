function createArticle() {
    // In this problem, you should create a JS functionality which creates articles and appends them into some article section.
    // The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads.
    // Scripts are provided and executed as a plain text. They don't need a special preparation or a compilation to run.
    // In this aspect, JavaScript is very different from another language called Java.
    let titleElement = document.getElementById("createTitle")
    let contentElement = document.getElementById("createContent")
    let titleContent = titleElement.value;
    let contentContent = contentElement.value;

    if (titleContent !== "" && contentContent !== "") {

        let titleElement = document.createElement("h3");
        titleElement.innerHTML = titleContent;

        let paraElement = document.createElement("p");
        paraElement.innerHTML = contentContent;

        let articleElement = document.createElement("article");
        articleElement.appendChild(titleElement);
        articleElement.appendChild(paraElement);

        let articleSectionElement = document.getElementById("articles")
        articleSectionElement.appendChild(articleElement);
    }
    titleElement.value = "";
    contentElement.value = "";
}