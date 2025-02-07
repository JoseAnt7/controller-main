import React, { useState } from "react";

export const Sidebar = () => {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="sidebar">
            <div className="opciones">
                <a href="#">
                    <i className="bi bi-wordpress" />
                    <span>Añadir Sitio</span>
                </a>
                <a href="#">
                    <i className="bi bi-arrow-left-right" />
                    <span>Movimientos</span>
                </a>
                <a href="#">
                    <i className="bi bi-clipboard-minus" />
                    <span>Gestionar Sites</span>
                </a>
                <a href="#">
                    <i className="bi bi-cart" />
                    <span>Añadir Suscripción</span>
                </a>
            </div>
            <div className="menu">
                <div className="menu-item">
                    <div className="menu-option" onClick={() => toggleMenu('inicio')}>
                        <i className="bi bi-house"></i>
                        <span>Dashboard</span>
                    </div>
                    {openMenu === 'inicio' && (
                        <div className="submenu">
                            <p>Dashboard</p>
                            <p>Resumen</p>
                        </div>
                    )}
                </div>
                <div className="menu-item">
                    <div className="menu-option" onClick={() => toggleMenu('movimiento')}>
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Movimientos</span>
                    </div>
                    {openMenu === 'movimiento' && (
                        <div className="submenu">
                            <p>Cerrar Sesión</p>
                            <p>Cambiar Usuario</p>
                        </div>
                    )}
                </div>
                <div className="menu-item">
                    <div className="menu-option" onClick={() => toggleMenu('configuracion')}>
                        <i className="bi bi-gear"></i>
                        <span>Configuración</span>
                    </div>
                    {openMenu === 'configuracion' && (
                        <div className="submenu">
                            <p>Perfil</p>
                            <p>Seguridad</p>
                        </div>
                    )}
                </div>
                <div className="menu-item">
                    <div className="menu-option" onClick={() => toggleMenu('perfil')}>
                        <i className="bi bi-person"></i>
                        <span>Perfil</span>
                    </div>
                    {openMenu === 'perfil' && (
                        <div className="submenu">
                            <p>Datos de la cuenta</p>
                            <p>Estado de suscripción</p>
                        </div>
                    )}
                </div>
                <div className="menu-item">
                    <div className="menu-option" onClick={() => toggleMenu('salir')}>
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span>Salir</span>
                    </div>
                    {openMenu === 'salir' && (
                        <div className="submenu">
                            <p>Cerrar Sesión</p>
                            <p>Cambiar Usuario</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )





}