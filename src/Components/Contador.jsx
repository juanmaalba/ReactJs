import {useState} from 'react';

const Contador = ({iniciar, stock, onAdd}) =>{
    const [count, setCount] = useState(iniciar);
    const disminuir = () =>{
        setCount(count - 1);
    }
    const aumentar = () =>{
        setCount(count +1);
    }
    return(
        <div className="d-flex justify-content-center" >
            <button className="badge text-bg-primary mx-2" disabled={count <= 1} onClick={disminuir}> - </button>
            <span className="badge bg-secondary"> {count} </span>
            <button className="badge text-bg-primary mx-2 " disabled = {count >= stock} onClick={aumentar}> + </button>
            <div>
                <button type="button"className="btn btn-outline-primary mx-2" disabled={stock <= 0} onClick ={()=> onAdd(count)} >Agregar al carrito!</button>
            </div>
        </div>
    )
};
export default Contador;