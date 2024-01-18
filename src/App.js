import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from "./components/About";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Times from "./components/Times";
import Reservations from "./components/Reservations";
import { Routes, Route } from "react-router-dom";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AlertProvider>
          <Header />
          <Alert />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
            <Route path="/times" element={<Times />}></Route>
          </Routes>
          <Footer />
        </AlertProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
