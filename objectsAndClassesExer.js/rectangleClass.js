function rectangle(width, height, color) {
    let a = {
        width: Number(width),
        height: Number(height),
        color: String(color),
        calcArea: function() {
            let result = Number(this.width) * Number(this.height)
            return Number(result)
        }
    }
    return a;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log(rect)