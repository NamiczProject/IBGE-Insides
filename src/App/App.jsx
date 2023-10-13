import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MapScreen from './Pages/MapScreen'
import MoreInfo from './Pages/MoreInfo'
import Functionalities from './Pages/Functionalities';
import Technologies from './Pages/Technologies';
import Purpouse from './Pages/Purposes';

import DevelopmentArea from './Pages/DevelopmentArea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Map" element = {<MapScreen/>}/>
        <Route path="/MoreInfo/:acronym" element = {<MoreInfo/>}/>
        <Route path="/Funcionalidade" element={<Functionalities/>}/>
        <Route path="/Finalidade" element={<Purpouse/>}/>
        <Route path="/Tecnologias" element={<Technologies/>}/>
        <Route path="/DevelopmentArea" element={<DevelopmentArea/>}/>
      </Routes>
    </Router>
  );
}

export default App;