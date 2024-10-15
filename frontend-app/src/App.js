import "./App.css";
import About from "./components/About";
import NavMenu from './components/Navmenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import PPolicy from "./components/PPolicy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import OrdersScreen from "./screens/OrdersScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Footer from "./components/Footer";
import AdminScreen from "./screens/AdminScreen";
import ForgotPassword from "./screens/ForgotPassword";
import ResetPassword from "./screens/ResetPassword";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <NavBar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tc' element={<Policy />} />
          <Route path="/privacy-policy" element={<PPolicy />}/>
          <Route path="/" element={<HomeScreen />}/>
          <Route path="/cart" element={<CartScreen />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/orders" element={<OrdersScreen />}/>
          <Route path="/admin/*" element={<AdminScreen />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset-password/:email" element={<ResetPassword />}/>
          <Route path="/profile" element={<ProfileScreen />}/>
          <Route path="/editprofile" element={<EditProfileScreen />}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
