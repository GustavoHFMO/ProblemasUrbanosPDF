import BarraTopo from './componentes/barraTopo/BarraTopo';
import Rodape from './componentes/rodape/Rodape';
import Inicial from './paginas/inicial/Inicial';
import Iluminacao from './paginas/Iluminacao/Iluminaçao';
import Saneamento from './paginas/Saneamento/Saneamento';
import Mobilidade from './paginas/Mobilidade/Mobilidade';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

export default function App() {

  return (

    <Router>

      <BarraTopo />

      <Routes>

        <Route exact path="/" element={<Inicial />} />

        <Route path="/iluminacao" element={<Iluminacao />} />

        <Route path="/saneamento" element={<Saneamento />} />

        <Route path="/mobilidade" element={<Mobilidade />} />

      </Routes>

      <Rodape />

    </Router>

  )

}