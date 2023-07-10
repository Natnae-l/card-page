let modest = "rgba(240, 218, 206, 0.474)";
let black =`rgba(0, 10, 10, 0.105)`;

document.querySelector(".li1").addEventListener("click", () => {
    document.body.style.backgroundColor = modest;
})
document.querySelector(".li2").addEventListener("click", () => {
    document.body.style.backgroundColor = black;
})

