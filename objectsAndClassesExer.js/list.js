class List {
    constructor(x) {
        this.x = []
        this.size = this.x.length;
    }

    add(elemenent) {
        this.x.push(elemenent);
        this.x.sort((a, b) => a - b);
        this.size = this.x.length;
    }
    remove(index) {
        if (index > -1) { this.x.splice(index, 1) };
        this.x.sort((a, b) => a - b);
        this.size = this.x.length;
    }
    get(index) {
        return this.x[index]
    }
}

let list = new List();
list.add(5);
console.log(list.get(0))
list.add(3);
console.log(list.get(0));
list.remove(0);
console.log(list.get(0));
console.log(list.size)