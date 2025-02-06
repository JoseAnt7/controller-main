import React from "react";
import "../../assets/css/_panel.css"
import { Navbar } from "../../components/panel/navbar";
import { Dashboard } from "../../components/panel/dashboard";

export const Panel = () => {

    return (
        <div className="background">
           <Navbar />
           <Dashboard />
        </div>
    )


}