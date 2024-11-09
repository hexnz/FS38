import { useState } from "react";
import style from './menu.css';
export function Menu {

    const menuItens=["Home","Produtos","Categorias","Meus Pedidos"];
    const {itemIndex,setItemIndex}=useState(null);
    function handleClick(index){
        setItemIndex{index};
    }
    return (
        <ul>
            {menuItens.map(item,index)=>(
                
                
                <li key={index} onClick={ => handleClick(index)}

                className={index=== itemIndex? ${style.active}:style.item}
                >
                
                
                
              

            }

    
        </ul>
    )
}