let colors = ["red","pink","green","orange","black"];
let sections = document.querySelectorAll("section");


for (let i = 0; i < sections.length; i++) {
    const element = sections[i];
    element.style.backgroundColor = colors[i];
}