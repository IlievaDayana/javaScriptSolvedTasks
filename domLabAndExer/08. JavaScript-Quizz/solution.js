function solve() {
    //There are three sections that contain one question and 2 possible answers. 
    // The right answer is only one! 
    // When one of the list elements is clicked, the next section must appear (if any…).
    // After all three questions have been answered, the result div must appear. (Use 'none' and 'block' 
    //to hide and show the question sections)
    // If all questions are answered correctly, you should prin the following message: 
    // "You are recognized as top JavaScript fan!"
    // Otherwise, just print "You have {rightAnswers} right answers".
    // The right answers are (onclick, JSON.stringify() and A programming API for HTML and XML documents).
    let result = 0;
    let i = 0;
    let answers = document.getElementsByTagName("p")
    Array.from(answers).forEach(answer => {
        answer.addEventListener(`click`, (ev) => {
            if (answer.innerText === "onclick" || answer.innerText === "JSON.stringify()" || answer.innerText === "A programming API for HTML and XML documents") {
                result++
            }

            let currentUl = answer.parentElement.parentElement.parentElement;
            currentUl.style.display = "none"
            let nextSection = currentUl.parentElement.nextSibling.nextSibling;
            nextSection.style.display = "block";
            i++;
            if (i === 3) {
                let x = document.getElementById("results").children[0].children[0]
                if (result === 3) {
                    x.innerHTML = "You are recognized as top JavaScript fan!"
                } else {
                    result.innerHTML = `You have ${result} right answers`
                }
            }
        });

    });
}