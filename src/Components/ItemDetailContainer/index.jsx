import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";

const detalle = { id:1, image:"https://http2.mlstatic.com/D_NQ_NP_980120-MCO48786869799_012022-V.jpg", title:"ITEM CON DETALLE", precio:"$100", descripcion:"De Los mejores discos de la humanidad"};

export const ItemDetailContainer = () => {

    const [data, setData] = useState ({});

    useEffect (() => {
        const getData= new Promise(resolve=> {
            setTimeout(() => {
                resolve(detalle);
            },2000);
        });

        getData.then(res => setData(res));
    }, [])



    return (
        <ItemDetail data={data} />
    );
}
export default ItemDetailContainer