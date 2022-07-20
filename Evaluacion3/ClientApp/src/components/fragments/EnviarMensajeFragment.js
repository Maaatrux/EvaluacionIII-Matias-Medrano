import React, { useState, useEffect } from 'react'

const EnviarMensajeFragment = ({ titulo, agregarMensaje }) => {
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }

    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleEnvioMensaje = (evento) => {
        const nuevoMensaje = {
            nombre: nombre,
            mensaje: mensaje,
            like: like,
            saludo: saludo
        }
        agregarMensaje(nuevoMensaje)
    }

    return (
        <>
            <h1>{titulo}</h1>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        value={nombre}
                        onChange={handleNombre}
                        name="nombre"
                        id="nombre"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        className="form-control"
                        type="text"
                        value={mensaje}
                        onChange={handleMensaje}
                        name="mensaje"
                        id="mensaje"
                        rows="3"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={like}
                            onChange={handleLike}
                            name="like"
                            id="like"
                        />
                        <label className="form-check-label" htmlFor="like">
                            Dar Like 👍
                        </label>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={saludo}
                            onChange={handleSaludo}
                            name="saludo"
                            id="saludo"
                        />
                        <label className="form-check-label" htmlFor="saludo">
                            Enviar Saludo 👋
                        </label>
                    </div>
                </div>
            </div>

            <div className="row mt-1">
                <div className="col-12 justify-content-start mt-3">
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleEnvioMensaje}
                    >Enviar</button>
                </div>
            </div>
        </>
    )
}

export default EnviarMensajeFragment