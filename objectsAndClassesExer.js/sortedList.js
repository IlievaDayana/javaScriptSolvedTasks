function createSortedList() {
    let a = {
        x: [],
        add,
        remove,
        get,
        size: 0,
    }
    return a;

    function add(elemenent) {
        this.x.push(elemenent);
        this.x.sort((a, b) => a - b);
        a.size++;
    }

    function remove(index) {
        if (index > -1 && index < a.size) {
            this.x.splice(index, 1)
            a.size--;
        };
        this.x.sort((a, b) => a - b);
    }

    function get(index) {
        return this.x[index]
    }
}
let a = createSortedList();
a.add(5);
a.add(6);
a.add(7);
a.add(7);
a.add(8);
a.add(74);
a.add(3);
console.log(a.get(1));
a.remove(1);
console.log(a.get(1));
console.log(a.size)
console.log(a.x)