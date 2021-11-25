

function Opcao(){
    var decisao 
    var opcaoUm = ("1") 
    var opcaoDois = ("2") 
    
    decisao = prompt("Escolha entre 1 ou 2 , para seguir a historia")

    
    if (decisao == 1) {
        window.location.href = "./gameover.html"
}
else if (decisao == 2) {
    window.location.href ="./jaspian2.html"
    }else {
        
        return alert("Opçao Invalida, Recarrega a pagina!!");
        
     }
 
}



