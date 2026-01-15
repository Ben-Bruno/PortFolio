//cspell:disable
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Acceuil from "./pages/Acceuil"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Acceuil} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;