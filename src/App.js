import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from "./components/About";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Reservations from "./components/Reservations";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
