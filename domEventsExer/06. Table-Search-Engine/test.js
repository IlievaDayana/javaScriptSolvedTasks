const regex = /(?:eva)/gmi;
const str = `John Dan	john@john-dan.com	JS-CORE
solution.js:11 Max Peterson	max@softuni.bg	JS-WEB
solution.js:11 Philip Anderson	philip@softuni.bg	FRONT-END
solution.js:11 Sam Lima	sam@gmail.com	TECH-JS
solution.js:11 Eva Longoria	eva@gmail.com	All possible courses`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });

}

function a() { console.log(regex.exec(` Eva Longoria	eva@gmail.com	All possible courses`)) }
a()