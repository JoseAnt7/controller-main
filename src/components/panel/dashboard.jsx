import React from "react";
import { Sidebar } from "./sidebar";
import { Pantalla_Operaciones } from "./operaciones";


export const Dashboard = () => {


    return(
        <div className="contenedor">
            <Sidebar />
            <Pantalla_Operaciones />
        </div>
    )



}