//cspell:disable
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Acceuil from "./pages/Acceuil"
import IA_ML from "./pages/IA_ML";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/ia_ML" element={<IA_ML/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
export default App;