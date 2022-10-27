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

var arrayUser = []
var arraySenha = []
var indexSup = 0

function ExclusaoCadastro(nome){
   for(var i2 = 0; i2 <= i; i2++){
      if(nome == user[i2]){
         user[i2] = 0
         senhas[i2] = 0
      }
   }
   for(var i3 = 0; i3 <= i2; i3++){
      if(user[i3] != 0 && senhas[i3] != 0){
         arrayUser[indexSup] = user[i3]
         arraySenha[indexSup] = senhas[i3]
         indexSup++
      }
   }
   user = arrayUser
   senhas = arraySenha
}


function EscolhaAcao() {
   acao = prompt("O que voce quer fazer? Digite 1 para cadastro, 2 para login, 3 para excluir cadastro ou 4 para encerrar o programa")
}