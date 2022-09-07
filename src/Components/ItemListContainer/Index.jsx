import React from "react";
import Title from "../Title";
import { ItemCount } from "../ItemCount";




export const ItemListContainer = () =>{


    const onAdd = (cantidad) =>{
        console.log(`Compraste ${cantidad} unidades`)
    }
    
    return(
        <>
        <Title saludo = 'LA MEJOR CALIDAD ASEGURADA'/>
        <ItemCount initial = {1} stock = {10} onAdd = {onAdd}/>
        </>
    );
}
export default ItemListContainer