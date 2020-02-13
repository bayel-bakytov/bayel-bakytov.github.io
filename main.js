let sections = document.querySelectorAll("section");
let linksInHeader = document.querySelectorAll("a");

for (let i = 0; i < linksInHeader.length; i++) {
    const element = linksInHeader[i];
    
    element.addEventListener("click",function(event){
        event.preventDefault();

        let ide = element.getAttribute("href");
       linksInHeader.className = ""

       
        this.element.className = "active";
    });
}