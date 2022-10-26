var user = []
var senha = []
var acao = 0
var contador = 0
EscolhaAcao()

function Cadastro(){
 user[contador] = prompt("Qual seu nome?")
 senha[contador] = prompt("Qual sua senha?")
 contador++
}

function EscolhaAcao(){
   acao = prompt("O que voce quer fazer? Digite 1 para cadastro, 2 para login, 3 para excluir cadastro ou 4 para encerrar o programa")
}