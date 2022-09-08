import Item from "../Item";
import React from "react";

export const ItemList = ({data=[]}) =>{
    return(
        data.map(x=> <Item key={x.id} info={x} />)
    );
}

export default ItemList;