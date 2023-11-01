import { useState } from "react";
import Card from "./Card";
import "./App.css";

const Form = () => {
    const [usuario, setUsuario] = useState({
        Nombre: '',
        colorDeTinte: '',
    })

    const [mostrar, setMostrar] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = /^[A-Za-z]{3,}( [A-Za-z]+)?$/
        if(usuario.Nombre.length >= 3 && usuario.colorDeTinte.length >= 6 && usuario.Nombre.trim() && regex.test(usuario.Nombre)){
            setMostrar(true)
            setError(false)
        }else{
            setError(true)
            setMostrar(false)
        }
    }


    return (
        <div className="fatherDiv">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <br/>
                    <input type="text" value={usuario.Nombre} onChange={(event) => setUsuario({...usuario, Nombre: event.target.value })} />
                    <br />
                    <label>Color de Tinte deseado</label>
                    <br/>
                    <input type="text" value={usuario.colorDeTinte} onChange={(event) => setUsuario({...usuario, colorDeTinte: event.target.value })} />
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
                </div>
                <div className="response">
                {mostrar && <Card nombre={usuario.Nombre} colorDeTinte={usuario.colorDeTinte}/>}
                {error && <h4 style={{color: 'blue'}}>Por favor chequea que la información sea correcta</h4>}
                </div>
        </div>
    )
}
export default Form;
