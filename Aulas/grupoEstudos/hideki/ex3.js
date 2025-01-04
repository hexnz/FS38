const obj=[10,20,30,50];


function bol (){
let cont=0;
let bool=true;

while(obj[cont]!==undefined){
    if(typeof obj[cont]=="number"){
        console.log(obj[cont]);
    }
    else{
            bool=false;
            
    }


    cont++
}

return bool;
}

console.log(bol());