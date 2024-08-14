import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import HomePage from './Components/HomePage/homepage';
import CremeBrulee from './Components/Recipes/French/CremeBrulee';
import QuicheLorraine from './Components/Recipes/French/QuicheLorraine';
import Ratatouille from './Components/Recipes/French/Ratatouille';
import Tiramisu from './Components/Recipes/Italian/Tiramisu';
import BranzinoalForno from './Components/Recipes/Italian/BranzinoalForno';
import Admin from './Components/LoginSignup/Admin';
import RecipeRequest from './Components/HomePage/RequestRecipe/RecipeRequest';
import ContactUs from './Components/HomePage/ContactUs/ContactUs';
import Arancini from './Components/Recipes/Italian/Arancini';
import AboutUs from './Components/HomePage/AboutUs/AboutUs';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import AdminUsers from './Components/AdminPanel/AdminUsers';
import AdminStats from './Components/AdminPanel/AdminStats';
import DakGalbi from './Components/Recipes/Korean/DakGalbi'
import Mochi from './Components/Recipes/Korean/Mochi'
import Tteokbokki from './Components/Recipes/Korean/Tteokbokki'

function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/cremebrulee" element={<CremeBrulee />} />
          <Route path="/quichelorraine" element={<QuicheLorraine />} />
          <Route path="/ratatouille" element={<Ratatouille />} />

          <Route path="/tiramisu" element={<Tiramisu />} />
          <Route path="/branzinoalforno" element={<BranzinoalForno />} />
          <Route path="/arancini" element={<Arancini />} />

          <Route path="/dakgalbi" element={<DakGalbi />} />
          <Route path="/mochi" element={<Mochi />} />
          <Route path="/tteokkbokki" element={<Tteokbokki />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/requestrecipe" element={<RecipeRequest />} />

          {/* ADMIN ROUTING */}
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminusers" element={<AdminUsers />} />
          <Route path="/adminstats" element={<AdminStats />} />

          </Routes>
          </BrowserRouter>
          {/* <AdminDashboard/> */}
    </div>
  );
}

export default App;
