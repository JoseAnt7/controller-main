import React from "react";

export const Card = ({imagen,contenido}) => {

    return (
        <div className="card" style={{ width: "20vh" }}>
            <img src={imagen} className="card-img-top" alt="Opciones_Usuario" />
            <div className="card-body">
                <p className="card-text">{contenido}</p>
            </div>
        </div>
    )


}