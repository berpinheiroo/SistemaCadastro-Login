var user = []
var senhas = []
var opcao = 0
var contador = 0
var continuar = "s"

function EscolhaAcao() {
   opcao = prompt("O que voce quer fazer? Digite 1 para cadastro, 2 para login, 3 para excluir cadastro ou 4 para encerrar o programa")
}

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

function ExclusaoCadastro(nome) {
   for (var i2 = 0; i2 <= contador; i2++) {
      if (nome == user[i2]) {
         user[i2] = 0
         senhas[i2] = 0
      }
   }
   for (var i3 = 0; i3 <= contador; i3++) {
      if (user[i3] != 0 && senhas[i3] != 0) {
         arrayUser[indexSup] = user[i3]
         arraySenha[indexSup] = senhas[i3]
         indexSup++
      }
   }
   user = arrayUser
   senhas = arraySenha
}

while(continuar == "s"){
   EscolhaAcao()

   if (opcao == 1){
      Cadastro()
   } else if (opcao == 2){
      var nome = prompt("Insira um nome para login")
      var senha = prompt ("Insira uma senha para login")
      var login = Login(nome, senha)
      if(login == true){
         console.log("Login feito com sucesso")
      } else {
         console.log("Nome ou senha incorreto")
      }
   } else if(opcao == 3){
      var nome = prompt("Insira um nome para excluir o cadastro")
      ExclusaoCadastro(nome)
      continuar = "s"
   } else if (opcao == 4){
      continuar = "n"
   }
   if(continuar == "s"){
      continuar = prompt("Deseja continuar? s ou n")
   }
}

