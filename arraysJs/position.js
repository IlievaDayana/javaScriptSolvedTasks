function pos(arr) {
    let items = "";
    arr.forEach(function(item, index) {
        if (index % 2 === 0) {
            items += " " + item;
        }
    });
    console.log(items);
}

pos([10, 20, 10, 12]);