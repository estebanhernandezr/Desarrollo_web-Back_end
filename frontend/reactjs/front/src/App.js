import './App.css';

import Container from 'react-bootstrap/Container';

import Home from './pages/listado/listado.page'
import Consultas from './pages/consulta/consulta.page'

import Update from './pages/actualizacion/actualizacion.page';
import Send from './pages/envio/envio.page';
import Register from './pages/registro/registro.page';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <BrowserRouter>
            <Routes>
              <Route path="/consult_all" element={<Home />} />
              <Route path="/consult/code" element={<Consultas />} />
              <Route path="/send" element={<Register />}/>
              <Route path="/set_estado/ORD00002" element={<Update />}/>
              <Route path="/upload_csv" element={<Send />}/>
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
