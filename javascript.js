const body = document.querySelector("body");
body.style.margin = "0px";
body.style.backgroundColor = "purple";
body.style.height = "100vh";
body.style.overflow = "hidden";
body.style.display = "flex";
body.style.justifyContent = "space-between";
body.style.alignItems = "center";
body.style.flexDirection = "column";


const tituloPag = document.querySelector("title");
tituloPag.textContent = "Prova de JavaScript";


const nav = document.createElement("nav");
nav.style.backgroundColor = "black";
nav.style.height = "50px";
nav.style.display = "flex";
nav.style.justifyContent = "space-around";
nav.style.alignItems = "center";
nav.style.color = "White";
nav.style.width = "101%";
body.appendChild(nav);


const paragrafo = document.createElement("h1");
paragrafo.style.color = "white";
paragrafo.textContent = "CALCULADORA DE MÉDIA";
body.appendChild(paragrafo);


const homeText = document.createElement("div");
homeText.textContent = "Home";
nav.appendChild(homeText);


const infoText = document.createElement("div");
infoText.textContent = "Informações";
nav.appendChild(infoText);


const contato = document.createElement("div");
contato.textContent = "Contato";
nav.appendChild(contato);


const div = document.createElement("div");
div.style.width = "1000px";
div.style.height = "500px";
div.style.border = "5px solid white";
div.style.boxShadow = "0px 0px 10px 10px white";
div.style.borderRadius = "100px";
div.style.backgroundColor = "gray";
div.style.display = "flex";
div.style.justifyContent = "space-evenly";
div.style.alignItems = "center";
div.style.flexDirection = "column";
body.appendChild(div);


const input = document.createElement("input");
input.style.border = "2px solid purple";
input.style.boxShadow = "0px 0px 5px 5px white";
input.style.borderRadius = "5px";
input.placeholder = "digite seu nome";
input.style.width = "300px";
input.style.height = "30px";
div.appendChild(input);


const input1 = document.createElement("input");
input1.style.border = "2px solid purple";
input1.style.boxShadow = "0px 0px 5px 5px white";
input1.style.borderRadius = "5px";
input1.placeholder = "digite a primeira nota";
input1.style.width = "300px";
input1.style.height = "30px";
div.appendChild(input1);


const input2 = document.createElement("input");
input2.style.border = "2px solid purple";
input2.style.boxShadow = "0px 0px 5px 5px white";
input2.style.borderRadius = "5px";
input2.placeholder = "digite a segunda nota";
input2.style.width = "300px";
input2.style.height = "30px";
div.appendChild(input2);


const input3 = document.createElement("input");
input3.style.border = "2px solid purple";
input3.style.boxShadow = "0px 0px 5px 5px white";
input3.style.borderRadius = "5px";
input3.placeholder = "digite a terceira nota";
input3.style.width = "300px";
input3.style.height = "30px";
div.appendChild(input3);


const bt = document.createElement("button");
bt.style.border = "1px solid black";
bt.style.borderRadius = "10px";
bt.style.height = "30px";
bt.textContent = "Calcule a média";
bt.addEventListener("click", function() {
    const nome = String(input.value);
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);
    const n3 = parseFloat(input3.value);

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        const media = (n1 + n2 + n3) / 3;
        bt.textContent = "Calculando...";
        bt.style.backgroundColor = "lightgreen";
        bt.style.border = "1px solid lightgreen";
        bt.style.boxShadow = "0px 0px 5px 5px lightgreen";
        resultadoDaMedia.textContent = (`${nome}, a sua média é: ${media.toFixed(1)}`);
        resultadoDaMedia.style.fontSize = "20px"
        resultadoDaMedia.style.backgroundColor = "lightgreen";
    } else {
        bt.textContent = "Erro!";
        bt.style.backgroundColor = "red";
        bt.style.border = "1px solid red";
        bt.style.boxShadow = "0px 0px 5px 5px red";
        resultadoDaMedia.textContent = (`Por favor, ${nome}, escreva as notas novamente. Erro inesperado.`);
        resultadoDaMedia.style.fontSize = "20px"
        resultadoDaMedia.style.backgroundColor = "red";
    }
});
div.appendChild(bt);


const resultadoDaMedia = document.createElement("div");
resultadoDaMedia.style.width = "550px";
resultadoDaMedia.style.height = "50px";
resultadoDaMedia.style.fontSize = "20px";
resultadoDaMedia.style.backgroundColor = "lightgray";
resultadoDaMedia.textContent = "Resultado aqui!";
resultadoDaMedia.style.border = "1px solid black";
resultadoDaMedia.style.display = "flex";
resultadoDaMedia.style.alignItems = "center";
resultadoDaMedia.style.justifyContent = "center";
resultadoDaMedia.style.borderRadius = "10px";
div.appendChild(resultadoDaMedia);


const footer = document.createElement("footer");
footer.style.backgroundColor = "black";
footer.style.margin = "0px";
footer.style.height = "50px";
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
footer.style.color = "White";
footer.textContent = "Alehandro Henrique da Silva Santos 2A";
footer.style.width = "101%";
body.appendChild(footer);