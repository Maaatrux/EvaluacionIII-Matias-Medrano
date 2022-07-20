import React, { useState, useEffect } from 'react'

const MensajesRecibidosFragment = ({ titulo, usuarios }) => {
    return (
        <>
            <div className="col-12">
                <h1>{titulo}</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Reacciones</th>
                            <th>Mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario, indice) => {
                            return (
                                <tr key={indice}>
                                    <td>{usuario.nombre}</td>
                                    <td>
                                        {usuario.like && "👍"}
                                        {usuario.saludo && "👋"}
                                        {!usuario.like && !usuario.saludo && "<Ninguno>"}
                                    </td>
                                    <td>{usuario.mensaje}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MensajesRecibidosFragment