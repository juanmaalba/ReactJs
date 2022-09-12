import React from "react";
import "./itemDetail.css"

export const ItemDetail = ({data}) => {
    return (
        <div className= 'container'>
            <div className= 'detail'>
                <img className= "detailImg" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                    <p>{data.precio}</p>
                    <p>{data.descripcion}</p>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail