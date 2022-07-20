import React, { useState, useEffect } from 'react'
import EnviarMensajeFragment from './fragments/EnviarMensajeFragment'
import MensajesRecibidosFragment from './fragments/MensajesRecibidosFragment'

const mensajesDefinidos = [
    { nombre: "Pepe Lota", mensaje: "Todo bien", like: true, saludo: false },
    { nombre: "Tulio Triviño", mensaje: "Aquí les envío un saludo", like: false, saludo: false }
]

const EnviarMensaje = () => {
    const [usuarios, setUsuarios] = useState(mensajesDefinidos)

    useEffect(() => {
        let copiaMensaje = [...usuarios]
        const nuevoMensaje = {
            nombre: "Patana Triviño",
            mensaje: "Olis",
            like: true,
            saludo: true
        }
        copiaMensaje.push(nuevoMensaje)
        setUsuarios(copiaMensaje)
    }, [])

    const agregarMensaje = nuevoMensaje => {
        setUsuarios([...usuarios, nuevoMensaje]);
    }

    return (
        <>
            <div className="row">
                <EnviarMensajeFragment titulo="Enviar Mensaje" agregarMensaje={agregarMensaje} />
            </div>
            <hr />
            <div className="row mt-5">
                <MensajesRecibidosFragment titulo="Mensajes Recibidos" usuarios={usuarios} />
            </div>
        </>
    )
}

export default EnviarMensaje