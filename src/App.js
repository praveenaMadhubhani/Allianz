// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import VerificationPage from './pages/Verification';
import Vehicle from './pages/Vehicle';
import VehicleDetailsPage from './pages/VehicleDetailsPage';
import DamageArea from './pages/DamageArea';
import DamageDetails from './pages/DamageDetails';
import Payable from './pages/Payable';
import HelpPage from './pages/HelpPage';



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/verification" element={<VerificationPage/>}/>
          <Route path="/vehicle" element={<Vehicle/>}/>
          <Route path="/vehicle-details" element={<VehicleDetailsPage/>}/>
          <Route path="/damage-area" element={<DamageArea/>}/>
          <Route path="/damage-details" element={<DamageDetails/>}/>
          <Route path="/payable" element={<Payable/>}/>
          <Route path="/help" element={<HelpPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
