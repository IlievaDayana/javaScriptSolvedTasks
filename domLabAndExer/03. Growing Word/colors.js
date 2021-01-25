function colors() {
    let colors = ["blue", "green", "red"]
    while (true) {
        color = colors.shift()
        colors.push(color)
        console.log(colors)
    }
}
colors()