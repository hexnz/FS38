const entradaDados= require('readline-sync') ;



const question=Number(entradaDados.question(" Insira o Numero :\n"));
console.log(question)

if(Number.isNaN(question)){
      console.log("O dado fornecido não é um NUMERO")
}
else {
    if(question%2==0){
    console.log("Numero Par");
    }
    else{
        console.log("Numero Impar");
    }
}






