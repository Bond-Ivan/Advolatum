import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Pages/Main/Main";
import Catalog from "./components/Pages/Catalog/Catalog";
import Collection from "./components/Pages/Collection/Collection";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Documentation from "./components/Pages/Documentation/Documentation";
import Basket from "./components/Pages/Basket/Basket";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
