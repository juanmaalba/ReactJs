import ItemList from "../ItemList";
import React, {useEffect, useState} from "react";
import Title from "../Title";
import { ItemCount } from "../ItemCount";



const x = [
    {id:1, image:'https://http2.mlstatic.com/D_NQ_NP_980120-MCO48786869799_012022-V.jpg', title:'Frank Sinatra, Mejilla a mejilla'},{id:2, image:'https://resources.claroshop.com/medios-plazavip/mkt/614cffb0eea37_602577471063_jpg.jpg?scale=350', title:'Stan Kenton'},{id:3, image:'https://http2.mlstatic.com/D_NQ_NP_622673-MLA46209300220_052021-V.jpg', title:'Louis Armstrong y los Mills brothers '},{id:4, image:'https://http2.mlstatic.com/D_NQ_NP_870391-MLA45727519168_042021-V.jpg', title:'Alphonse Mouzon'},
    {id:5, image:'https://http2.mlstatic.com/D_NQ_NP_713110-MLA46202483982_052021-V.jpg', title:'Pat Metheny & Lyle Mays'},
    {id:6, image:'https://i0.wp.com/www.elsurco.ec/app/wp-content/uploads/2021/07/19495.jpg?fit=300%2C307&ssl=1', title:'Enoch Light y su orquesta'},
];


export const ItemListContainer = () =>{

    const [data, setData]= useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(x);
            }, 2000);
        });
        getData.then(res => setData(res))
    }, [])

    const onAdd = (cantidad) =>{
        console.log(`Compraste ${cantidad} unidades`)
    }

    return(
        <>
        <Title saludo = 'LA MEJOR CALIDAD ASEGURADA'/>
        <ItemCount initial = {1} stock = {10} onAdd = {onAdd}/>
        <ItemList data = {data}/>
        </>
    );
}
export default ItemListContainer