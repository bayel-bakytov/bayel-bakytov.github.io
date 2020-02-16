let sections = document.querySelectorAll("section");
let linksInHeader = document.querySelectorAll("a");

for (let index = 0; index < linksInHeader.length; index++) {
    const element = linksInHeader[index];

    element.addEventListener("click", function (event) {
        event.preventDefault();

        let ide = element.getAttribute("href");
        let section = document.querySelector(ide);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        section.className = "active";
    });
}


