import React from "react";
import { Card } from "./cards/cards_menu";
import imagen from "../../assets/img/profile/5087579.png";

export const Menu_Op = () => {

    return (
        <>
            <div class="d-flex justify-content-center align-items-center">
                <h1>Bienvenido Usuario</h1>
            </div>
            <div className="zona_menu">
                <div className="Contenedor_Tarjetas d-flex justify-content-center">
                    <Card imagen={imagen} contenido={"Administrar Wordpress"}/>
                    <Card imagen={imagen} contenido={"Últimos movimientos"}/>
                    <Card imagen={imagen} contenido={"Comprobar Logs"}/>
                    <Card imagen={imagen} contenido={"Suscripciones"}/>
                </div>
                <div className="Contenedor_Tarjetas d-flex justify-content-center">
                    <Card imagen={imagen} contenido={"Lista de Complementos"}/>
                    <Card imagen={imagen} contenido={"Tarjeta de prueba"}/>
                    <Card imagen={imagen} contenido={"Tarjeta de prueba"}/>
                    <Card imagen={imagen} contenido={"Tarjeta de prueba"}/>
                </div>
            </div>
        </>
    )



}