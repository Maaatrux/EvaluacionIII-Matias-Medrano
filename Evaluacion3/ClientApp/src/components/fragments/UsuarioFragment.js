import React, { useState, useEffect } from 'react'

const UsuarioFragment = ({ imagen, titulo, children, alt = "Imagen de perfil" }) => {

    return (
        <>
            <div className="card">
                <img src={imagen} className="card-img-top" alt={alt} />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{children}</p>
                </div>
            </div>
        </>
    )
}

export default UsuarioFragment