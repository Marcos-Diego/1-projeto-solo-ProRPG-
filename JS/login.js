// sections
const criar = document.getElementById("criar");
const logar = document.getElementById("logar");
// butoes
const butoes = document.querySelectorAll("button");
for (let x = 0; x < butoes.length; x++) {

    let text_x = butoes[x].textContent;
    switch (text_x) {
        case "Esqueci a senha":
            const esqueci = butoes[x];
        case "Inscreva-se":
            const inscreva = butoes[x];
        case "Entre aqui!":
            const tenho = butoes[x];
    }
}