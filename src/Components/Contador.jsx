import React,{useState} from "react";

const Contador = ({iniciar, stock, valor}) =>{
    const [count, setCount] = useState(iniciar);
    const disminuir = () =>{
        setCount(count - 1);
    }
    const aumentar = () =>{
        setCount(count +1);
    }
    return(
        <div className='contador'>
        <button disabled={count <= 1} onClick={disminuir}> - </button>
        <span> {count} </span>
        <button disabled={count <= stock } onClick={aumentar}> + </button>
        <div>
            <button disabled = {stock <=0} onClick= {()=> valor(count)}>Agregar al carrito!</button>
        </div>
        </div>
    )
};
export default Contador;