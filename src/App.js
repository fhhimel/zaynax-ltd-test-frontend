import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles.css';
import Home from './components/Home';
import AdminSignin from "./components/admin/AdminSignin";
import Dashboard from "./components/admin/Dashboard";
import ViewProducts from "./components/admin/ViewProducts";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />


            {/* Admin Routes */}
            <Route path="/admin-signin" element={<AdminSignin />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/view-products" element={<ViewProducts />} />

          
        </Routes>
      </Router>
    </>
  );
}

export default App;
