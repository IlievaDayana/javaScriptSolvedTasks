function wordsTracker(input) {
    //     Write a function that receives an array of words and finds occurrences of given words in that sentence. 
    // The input will come as array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words you will be looking for. 
    // Print for each word how many times it occurs. The words should be sorted by count in descending

    let wordsToTrack = input.shift().split(" ");
    let result = new Map();
    wordsToTrack.forEach((word) => {
        result.set(word, 0);
    });
    input.forEach((item) => {
        if (result.has(item)) {
            let newVal = result.get(item);
            result.set(item, (newVal += 1));
        }
    });

    let occurances = Array.from(result.entries());
    console.log(occurances)
    occurances.sort((a, b) => Number(b[1]) - Number(a[1]));
    occurances.forEach((occurance) => {
        console.log(`${occurance[0]} - ${occurance[1]}`);
    });
}
wordsTracker([
    "this sentence",
    "sentence",
    "sentence",
    "sentence",
    "sentence",
    "sentence",
    "this",
    "this",
    "this",
    "this",
    "sent",
]);