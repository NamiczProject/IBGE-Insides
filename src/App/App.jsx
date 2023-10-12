import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import MapScreen from './Pages/MapScreen'
import MoreInfoView from './Pages/MoreInfoView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Map" element = {<MapScreen/>}/>
        <Route path="/MoreInfo/:acronym" element = {<MoreInfoView/>}/>
      </Routes>
    </Router>
  );
}

export default App;