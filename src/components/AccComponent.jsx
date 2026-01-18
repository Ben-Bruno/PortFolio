//cspell:disable
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccComponent() {
    const navigate = useNavigate();

    // Fonction générique pour la navigation
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="hero-container container-fluid">
            <div className="hero-card">

                <div className="tapis">
                    <div className="tapis-track">
                        <span>PORTFOLIO D’INGÉNIEUR • IA • ROBOTIQUE • SYSTÈMES EMBARQUÉS • FULL-STACK • </span>
                        <span>PORTFOLIO D’INGÉNIEUR • IA • ROBOTIQUE • SYSTÈMES EMBARQUÉS • FULL-STACK • </span>
                    </div>
                </div>

                {/* Utilisation de d-flex et flex-wrap de Bootstrap pour la responsivité des bulles */}
                <div className="bubbles d-flex flex-wrap justify-content-center gap-3">

                    <div className="bubble clickable" onClick={() => handleNavigation("/ia_ML")}>
                        Ingénieur IA
                    </div>

                    <div className="bubble clickable" onClick={() => handleNavigation("/fullstack")}>
                        Full-Stack developpeur
                    </div>

                    <div className="bubble clickable" onClick={() => handleNavigation("/web")}>
                        React & Laravel
                    </div>

                    <div className="bubble clickable" onClick={() => handleNavigation("/embedded")}>
                        Systèmes embarqués
                    </div>

                    <div className="bubble clickable" onClick={() => handleNavigation("/robotique")}>
                        Projets robotiques industriels
                    </div>

                </div>

            </div>
        </div>
    );
}