//cspell:disable
import { NavLink } from "react-router-dom";
import AppBar from "../components/AppBar";
import Bouton from "../components/Bouton";
import Footer from "../components/Footer";
import Ia_MLComponent from "../components/Ia_MLComponent";



//cspell:disable
const IA_ML = () => {
    return (
        <div style={{ height: '120vh', width: '100vw', overflowX: 'hidden' }}>
            <AppBar />
            <Bouton />
            <Ia_MLComponent />
        </div>
    );
};
export default IA_ML;