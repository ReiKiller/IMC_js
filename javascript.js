const body = document.querySelector("body");
body.style.backgroundColor = "gray";
body.style.height = "100vh";
body.style.overflow = "hidden";
body.style.display = "flex";
body.style.justifyContent = "space-between";
body.style.alignItems = "center";
body.style.flexDirection = "column";


const header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.height = "50px";
header.style.display = "flex";
header.style.justifyContent = "space-around";
header.style.alignItems = "center";
header.style.color = "White";
header.style.width = "101%";
body.appendChild(header);

const homeText = document.createElement("nav");
homeText.textContent = "Home";
header.appendChild(homeText);

const infoText = document.createElement("nav");
infoText.textContent = "Informações";
header.appendChild(infoText);

const contato = document.createElement("nav");
contato.textContent = "Contato";
header.appendChild(contato);


const div = document.createElement("div");
div.style.width = "1000px";
div.style.height = "500px";
div.style.border = "5px solid black"
div.style.borderRadius = "10px"
div.style.backgroundColor = "white";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center"
body.appendChild(div);


const bt = document.createElement("button");
bt.style.height = "20px";
bt.textContent = "Calcule a média";
bt.addEventListener("click", function(){
    alert ("Calcuando média...");
});
div.appendChild(bt);


const footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.height = "50px";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.color = "White";
footer.textContent = "Alehandro";
footer.style.width = "101%";
body.appendChild(footer);