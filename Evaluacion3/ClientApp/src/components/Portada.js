import React, { useState, useEffect } from 'react'
import imagen from '../assets/images/imagen.png'
import UsuarioFragment from './fragments/UsuarioFragment'

const Portada = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <UsuarioFragment
                        titulo="Matías Medrano"
                        imagen={imagen} >
                        Alumno de inacap
                    </UsuarioFragment>
                </div>

                <div className="col-6 text-center">
                    <h1>Matías Medrano</h1>
                    <p>
                        Mi nombre es Matías Medrano, tengo 20 años, nací un 25 de junio del año 2002 en Calama, Chile.
                        <br />
                        Soy estudiante de Inacap Calama. Actualmente estudio en la carrera de Analista Programador en quinto semestre.
                        Después de sacar el técnico en informática me gustaría irme por la Ingeniería.
                        <br />
                        En mis pasatiempos gusta jugar con mis amigos, escuchar música y tocar instrumentos musicales.
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <h1>Habilidades</h1>
                    <p>Listado de habilidades</p>
                    <ul className="list-group">
                        <li className="list-group-item">Manejo de lenguajes para administrar bases de datos como SQL.</li>
                        <li className="list-group-item">Conocimiento de la programación Orientada a objetos.</li>
                        <li className="list-group-item">Saber de diseño web y cómo potenciar la Experiencia de Usuario.</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Portada