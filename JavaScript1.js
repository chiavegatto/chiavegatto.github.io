function Enviar() {

    var nome = document.getElementById("nomeid");
    var mensagem = document.getElementById("msg");

    if (nome.value != "") {
        mensagem = 'Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso';
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}

function Submit() {

    var nome = document.getElementById("opiniao");
    var mensagem = document.getElementById("msg");

    if (nome.value != "") {
        mensagem = 'Obrigado! Sua opinião foi enviada com sucesso';
        alert('Obrigado! Sua opinião foi enviada com sucesso');
    }

}

function Limpar() {
  document.getElementById('meu_form').reset();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
