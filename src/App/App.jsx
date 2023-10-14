import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MapScreen from './Pages/MapScreen'
import MoreInfo from './Pages/MoreInfo'

import DevelopmentArea from './Pages/DevelopmentArea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Map" element = {<MapScreen/>}/>
        <Route path="/MoreInfo/:acronym" element = {<MoreInfo/>}/>
        <Route path="/DevelopmentArea" element={<DevelopmentArea/>}/>
      </Routes>
    </Router>
  );
}

export default App;