//cspell:disable
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Bouton = () => {
  useEffect(() => {

  }, []);
  const navigate = useNavigate();

  const seConnectergithub = () => {
    navigate("https://github.com/Ben-Bruno/");
  };
   const seConnecterlkd = () => {
    navigate("https://www.linkedin.com/in/bruno-bengono");
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
          A propos du développeur
        </button>
      </div>

      <div className="bouton-droite">

        <NavLink to="/">
          <button
            type="button"
            className="btn btn-secondary anim"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Se connecter"
            onClick={seConnecterlkd}
          >
            linkedin
          </button>
        </NavLink>

        <NavLink to="/">
          <button
            type="button"
            className="btn btn-secondary anim"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            data-bs-title="Se connecter"
            onClick={seConnectergithub}
          >
            GitHub
          </button>
        </NavLink>

      </div>
    </div>
  );
};

export default Bouton;
