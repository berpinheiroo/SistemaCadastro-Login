var user = []
var senhas = []
var acao = 0
var contador = 0
EscolhaAcao()

function Cadastro() {
   user[contador] = prompt("Qual seu nome?")
   senhas[contador] = prompt("Qual sua senha?")
   contador++
}

function Login(nome, senha) {
   for (var i = 0; i <= contador; i++) {
      if (nome == user[i] && senha == senhas[i]) {
         return true
      } else {
         return false
      }
   }
}

function EscolhaAcao() {
   acao = prompt("O que voce quer fazer? Digite 1 para cadastro, 2 para login, 3 para excluir cadastro ou 4 para encerrar o programa")
}