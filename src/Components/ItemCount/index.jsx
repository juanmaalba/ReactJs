
import React,{useState} from "react";

export const ItemCount = ({initial,stock,onAdd}) =>{

    const [count,setCount]= useState(initial);

    const decrease = () =>{
        setCount(count - 1);
    }
    const increase = () =>{
        setCount(count + 1);
    }
    return(
        <div>
            <div className="p-3 mb-2 bg-dark text-white d-flex justify-content-center" >
                <button type="button" className="btn btn-primary m-2 " onClick={decrease} disabled={count <=1}> - </button>
                <span className="m-3"> {count} </span>
                <button type="button" className="btn btn-primary m-2" onClick={increase} disabled={count >= stock}> + </button>
                    <div className="justify-content-center">
                        <button type="button" className="btn btn-primary m-2" disabled={stock <= 0} onClick={()=> onAdd(count)} >AGREGAR!</button>
                    </div>
            </div>
            
        </div>
    )
}