
const htjsDiv=document.createElement("div");
const htjsHeader=document.createElement("header");
const htInput=document.createElement("h1")
const takingElement=document.getElementById("produtcts-list-table");

// criando tags html
const tableRoll=document.createElement("tr");
const tableBody=document.createElement("tbody");





createProduts();

tableBody.appendChild(tableRoll);
takingElement.appendChild(tableBody);



function createProduts() {
    for(let j=0;j<2;j++)
        {

            const tableRoll=[j];
            const tableRoll=document.createElement("tr");
    
    for(let i=0;i<6;i++){

        let name=["Tenis","Nike","380","500","jo3ao","ju4lio"]
    
    
        const tableTd=document.createElement("td");
        tableTd.innerText=name[`${i}`];
        tableRoll.appendChild(tableTd);
        
    }
}

}









