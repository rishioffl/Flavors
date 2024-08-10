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
function Router() {
  return (
    <div>
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          </BrowserRouter>
          {/* <RecipeRequest/> */}
    </div>
  );
}

export default Router;
