function Opcao(){
    var decisao 
    var opcaoUm = ("1") 
    var opcaoDois = ("2") 
    
    decisao = prompt("Escolha entre 1 ou 2 , para seguir a historia")

    if (decisao == 1) {
    return location= "file:///C:/Users/Filipe/OneDrive/%C3%81rea%20de%20Trabalho/Dev/ProjetoModulo1/camile3.html"
}
else if (decisao == 2) {
    return location= "file:///C:/Users/Filipe/OneDrive/%C3%81rea%20de%20Trabalho/Dev/ProjetoModulo1/gameover.html"
    }else {
        return alert("Opçao Invalida")
    }

}

setTimeout (Opcao ,3000)
