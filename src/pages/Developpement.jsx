import AppBar from "../components/AppBar";
import Bouton from "../components/Bouton";
import Footer from "../components/Footer";

//cspell:disable
const Developpement = () => {
        return (
        <div style={{ height: '120vh', width: '100vw', overflowX: 'hidden' }}>
            <AppBar />
            <Bouton />
            <Footer />
        </div>
    );
}
export default Developpement;