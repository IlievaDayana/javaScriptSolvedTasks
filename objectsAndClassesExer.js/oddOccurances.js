function a(string) {
    //     Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
    // The input comes as a single string. The words will be separated by a single space.

    let arrayOfx = string.split(" ");
    let occurances = new Map();
    arrayOfx.forEach((item) => {
        if (occurances.has(item.toLowerCase())) {
            let newVal = occurances.get(item.toLowerCase()) + 1;
            occurances.set(item.toLowerCase(), (newVal));
        } else {
            occurances.set(item.toLowerCase(), (1))
        }
    });
    let filtered = []
    for (let key of occurances) {
        if (Number(key[1]) % 2 !== 0) {
            filtered.push(key[0])
        }
    }
    console.log(filtered.join(" "))

}

a('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')