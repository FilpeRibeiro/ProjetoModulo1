var decisao = prompt("Escolha entre 1 ou 2 , para seguir a historia")

function Opcao(){
    setTimeout (decisao, 10000)
if (decisao == 1) {
    return location= "file:///C:/Users/Filipe/OneDrive/%C3%81rea%20de%20Trabalho/Dev/ProjetoModulo1/gameover.html"
}
else if (decisao == 2) {
    return location= "file:///C:/Users/Filipe/OneDrive/%C3%81rea%20de%20Trabalho/Dev/ProjetoModulo1/jaspian2.html"
    }else {
        return alert("Opçao Invalida")
    }

}
setTimeout (decisao, 10000)
Opcao(decisao);


