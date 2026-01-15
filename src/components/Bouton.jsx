//cspell:disable
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Bouton = () => {
  useEffect(() => {

  }, []);
  const navigate = useNavigate();

  const seConnecter = () => {
    navigate("");
  };
  const faq = () => {
    navigate("/");
  }
  const about = () => {
    navigate("/");
  }
  const savoirPlus = () => {
    navigate("/");
  }

  // const navigate = useNavigate();



  return (
    <div className="contenant">
      <div className="bouton-gauche">
        <button
          type="button"
          className="btn btn-secondary anim"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="En savoir plus"
          onClick={savoirPlus}

        >
          En savoir plus
        </button>
        <button
          type="button"
          className="btn btn-secondary anim"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-title="FAQs"
          onClick={faq}

        >
          FAQs
        </button>
        <button
          type="button"
          className="btn btn-secondary anim"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          data-bs-title="A propos des développeurs"
          onClick={about}
        >
          A propos des développeurs
        </button>
      </div>

      <div className="bouton-droite">
        (
        <button
          type="button"
          className="btn btn-secondary anim"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title="Se deconnecter"

          style={{
            borderRadius: "999px",
            padding: "10px 24px",
            border: "none",
            backgroundColor: "#ff5a1f",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Se déconnecter
        </button>
        ) : (
        <NavLink to="/connexion">
          <button
            type="button"
            className="btn btn-secondary anim"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Se connecter"
            onClick={seConnecter}
          >
            Se connecter
          </button>
        </NavLink>
        )
      </div>
    </div>
  );
};

export default Bouton;
