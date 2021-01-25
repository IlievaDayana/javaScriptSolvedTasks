function solve() {
    let searchedElement = document.querySelector("#searchField");
    let buttonElement = document.querySelector("#searchBtn");
    buttonElement.addEventListener('click', showSearchedInfo);


    function showSearchedInfo() {
        let tableData = document.querySelectorAll("tbody tr");
        for (d of tableData) {
            let regex = new RegExp(`(?:${searchedElement.value})`, "gi")
            if (d.innerText.match(regex) !== null) {
                d.className = "select"
            } else {
                d.className = ""
            }
        }
        searchedElement.value = ""
    }
    //  Write a function that searches in a table by given input.
    //  When the "Search" button is clicked, go through all cells in the table except for the first row(Student name, Student email and Student course) 
    //  and check if the given input has a match (check for both full words and single letters).
    //  If any of the rows contain the submitted string, add a select class to that row. 
    //  Note that more than one row may contain the given string. 
    //  Оtherwise, if there is no match, nothing should happen.
    //  Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) 
    //  from the previous search, in order for the new search to contain only the new result.
    //  For instance, if we try to find eva:
    //  If we try to find all students who have email addresses in softuni domain, the expected result should be:
}