import React from "react";

export const Card = ({imagen, enalce, contenido}) => {

    return (
        <div class="card" style="width: 18rem;">
            <img src={imagen} class="card-img-top" alt="Opciones_Usuario" />
            <div class="card-body">
                <p class="card-text">{contenido}</p>
            </div>
        </div>
    )


}