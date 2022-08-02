const colors = [
    "red",
    "blue",
    "Turquoise",
    "orange",
    "Beige",
    "teal",
    "Cyan",
    "silver",
    "tan",
    "Indigo"
];

function colorChange(color) {
    document.body.style.backgroundColor = color;
    document.querySelector("#colorName").innerHTML = color;
    document.querySelector(`button[data-color=${color}]`).classList.add("active");
}
colors.forEach(color => {
    const button = document.createElement("button");
    document.querySelector("div.colors").appendChild(button);
    button.setAttribute("data-info" , color);
    button.style.backgroundColor = color;
    button.onclick = function () {
        colorChange(color);
    }
})


document.body.onload = function () {
    const random = Math.floor(Math.random() * colors.length);
    const color = colors[random];
    colorChange(color);

}
