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
import { AnimatePresence, motion } from "framer-motion";
import pagesAnimation from "./shared/animations/pagesAnimation";
import ScrollToTop from "./shared/scrollTop/scrollTop";

function App() {

  return (
    <BrowserRouter basename='Advolatum'>
      <Header />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes >
          <Route
            path="/"
            element={
              <motion.div
                key="main"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <Main />
              </motion.div>
            }
          />
          <Route
            path="/catalog"
            element={
              <motion.div
                key="catalog"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <Catalog />
              </motion.div>
            }
          />
          <Route
            path="/collection"
            element={
              <motion.div
                key="collection"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <Collection />
              </motion.div>
            }
          />
          <Route
            path="/aboutUs"
            element={
              <motion.div
                key="aboutUs"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <AboutUs />
              </motion.div>
            }
          />
          <Route
            path="/documentation"
            element={
              <motion.div
                key="documentation"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <Documentation />
              </motion.div>
            }
          />
          <Route
            path="/basket"
            element={
              <motion.div
                key="basket"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <Basket />
              </motion.div>
            }
          />
          <Route
            path="/contacts"
            element={
              <motion.div
                key="contacts"
                initial="initial"
                animate="in"
                exit="out"
                variants={pagesAnimation}
                transition={{ duration: 0.7 }}
              >
                <Contacts />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </BrowserRouter>
  )
}

export default App
