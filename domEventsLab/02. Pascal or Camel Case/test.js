function convert(word) {

    let x = word.toLowerCase().split(" ");
    for (i = 0; i < x.length; i++) {
        let word = x[i].split("");
        word[0] = word[0].toUpperCase();
        word = word.join("");
        x[i] = word;
    }

    console.log(x.join(""))

}


convert("Ada is rEality");