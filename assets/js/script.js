let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let descricao = document.querySelector("#descricao")
let nomeOk = false
let emailOk = false
let descricaoOk = false
let mapa = document.querySelector("#mapa")
let neoservice = document.querySelector(".neoservice")
let askMarinho = document.querySelector(".askmarinho")
let imgAskMarinho = document.querySelector("#imgAsk")
let imgNeoService = document.querySelector("#imgNeo")

let h4AskMarinho = document.querySelector("#askh4")
let pAskMarinho = document.querySelector("#askp")
let botAskMarinho = document.querySelector("#askbot")

let h4NeoService = document.querySelector("#neoh4")
let pNeoService = document.querySelector("#neop")
let botNeoService = document.querySelector("#neobot")


imgAskMarinho.style.transitionDuration = "1s";
imgNeoService.style.transitionDuration = "1s";

h4AskMarinho.style.transitionDuration = "1s";
pAskMarinho.style.transitionDuration = "1s";
botAskMarinho.style.transitionDuration = "1s";
h4NeoService.style.transitionDuration = "1s";
pNeoService.style.transitionDuration = "1s";
botNeoService.style.transitionDuration = "1s";

function validaNome() {
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaDescricao() {
    let txtDescricao = document.querySelector("#txtDescricao")

    if (descricao.value.length > 100) {
        txtDescricao.innerHTML = "Descrição inválida, texto muito grande, digite um máximo de 100 caracteres"
        txtDescricao.style.color = "red"
        descricaoOk = false
    } else if (descricao.value.length < 5) {
        txtDescricao.innerHTML = "Descrição inválida, digite no mínimo 5 caracteres"
        txtDescricao.style.color = "red"
        descricaoOk = false
    } else {
        txtDescricao.innerHTML = "Descrição válida"
        txtDescricao.style.color = "green"
        descricaoOk = true
    }
}

function enviarDados() {
    if (nomeOk == true && emailOk == true && descricaoOk == true) {
        alert("Formulário enviado!")
    } else {
        alert("Preencha o formulário corretamente antes de enviar!")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {

    mapa.style.width = "400px"
    mapa.style.height = "250px"

}


function askHover() {
    imgAskMarinho.style.width = "350px"
    imgAskMarinho.style.height = "350px"

    imgNeoService.style.width = "250px"
    imgNeoService.style.height = "250px"

    imgNeoService.style.opacity = "0.5"

    h4AskMarinho.style.fontSize = "18px";
    pAskMarinho.style.fontSize = "17px";
    botAskMarinho.style.fontSize = "17px";

    h4NeoService.style.fontSize = "15px";
    pNeoService.style.fontSize = "14px";
    botNeoService.style.fontSize = "14px";

    h4NeoService.style.opacity = "0.5"
    pNeoService.style.opacity = "0.5"
    botNeoService.style.opacity = "0.5"

}

function askOut() {
    imgAskMarinho.style.width = "300px"
    imgAskMarinho.style.height = "300px"

    imgNeoService.style.width = "300px"
    imgNeoService.style.height = "300px"

    imgNeoService.style.opacity = "1"

    h4AskMarinho.style.fontSize = "16px";
    pAskMarinho.style.fontSize = "16px";
    botAskMarinho.style.fontSize = "16px";

    h4NeoService.style.fontSize = "16px";
    pNeoService.style.fontSize = "16px";
    botNeoService.style.fontSize = "16px";

    h4NeoService.style.opacity = "1"
    pNeoService.style.opacity = "1"
    botNeoService.style.opacity = "1"
}

function neoHover() {
    imgNeoService.style.width = "350px"
    imgNeoService.style.height = "350px"

    imgAskMarinho.style.width = "250px"
    imgAskMarinho.style.height = "250px"

    imgAskMarinho.style.opacity = "0.5"

    h4AskMarinho.style.fontSize = "15px";
    pAskMarinho.style.fontSize = "14px";
    botAskMarinho.style.fontSize = "14px";

    h4NeoService.style.fontSize = "18px";
    pNeoService.style.fontSize = "17px";
    botNeoService.style.fontSize = "17px";

    h4AskMarinho.style.opacity = "0.5"
    pAskMarinho.style.opacity = "0.5"
    botAskMarinho.style.opacity = "0.5"

}

function neoOut() {
    imgNeoService.style.width = "300px"
    imgNeoService.style.height = "300px"

    imgAskMarinho.style.width = "300px"
    imgAskMarinho.style.height = "300px"

    imgAskMarinho.style.opacity = "1"

    h4AskMarinho.style.fontSize = "16px";
    pAskMarinho.style.fontSize = "16px";
    botAskMarinho.style.fontSize = "16px";

    h4NeoService.style.fontSize = "16px";
    pNeoService.style.fontSize = "16px";
    botNeoService.style.fontSize = "16px";

    h4AskMarinho.style.opacity = "1"
    pAskMarinho.style.opacity = "1"
    botAskMarinho.style.opacity = "1"
}