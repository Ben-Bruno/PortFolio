//cspell:disable
import { NavLink } from "react-router-dom";
import AppBar from "../components/AppBar";
import Bouton from "../components/Bouton";
import Footer from "../components/Footer";
import AccComponent from "../components/AccComponent";



//cspell:disable
const Acceuil = () => {
    return (
        <div style={{ height: '120vh', width: '100vw', overflowX: 'hidden' }}>
            <AppBar />
            <Bouton />
            <AccComponent />
            <Footer />
        </div>
    );
};
export default Acceuil;