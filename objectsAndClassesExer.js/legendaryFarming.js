function legendary(a) {
    //     You’ve beaten all the content and the last thing left to accomplish is own a legendary item. 
    // However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do. 
    // The possible items are:
    // •	Shadowmourne – requires 250 Shards;
    // •	Valanyr – requires 250 Fragments;
    // •	Dragonwrath – requires 250 Motes;
    // Shards, Fragments and Motes are the key materials, all else is junk. You will be given as a string, such as 2 motes 3 ores 15 stones.
    // Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained. Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.
    // Input
    // •	Input is a string  in format {quantity} {material} {quantity} {material} … {quantity} {material}
    // Output
    // •	On the first line, print the obtained item in format {Legendary item} obtained!
    // •	On the next three lines, print the remaining key materials in descending order by quantity
    // o	If two key materials have the same quantity, print them in alphabetical order
    // •	On the final several lines, print the junk items in alphabetical order
    // o	All materials are printed in format {material}: {quantity}
    // o	All output should be lowercase, except the first letter of the legendary

    let legendaryElement = {
        "shards": "Shadowmourne",
        "fragments": "Valanyr",
        "motes": "Dragonwrath"
    };
    let keyMaterials = {
        "shards": 0,
        "fragments": 0,
        "motes": 0
    };
    let junk = {}
    let x = a.split(" ");
    for (let i = 0; i < x.length; i += 2) {
        let itemName = x[i + 1].toLowerCase();
        let itemValue = Number(x[i]);
        if (keyMaterials.hasOwnProperty(itemName)) {
            keyMaterials[itemName] += itemValue;
            let result = keyMaterials[itemName]
            if (result >= 250) {
                keyMaterials[itemName] = result - 250;
                console.log(`${legendaryElement[itemName]} obtained!`)
                break;
            }
        } else {
            if (junk.hasOwnProperty(itemName)) {
                junk[itemName] += itemValue;
            } else {
                junk[itemName] = itemValue;
            }
        }

    }
    // Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, 
    // then by name in ascending order, each on a new line. 
    // Finally, print the collected junk items, in alphabetical order.
    let orderedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    for ([k, v] of orderedKeyMaterials) {
        console.log(`${k}: ${v}`)
    }
    let orderedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]))
    for ([x, y] of orderedJunk) {
        console.log(`${x}: ${y}`)
    }
}

legendary('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
legendary('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')