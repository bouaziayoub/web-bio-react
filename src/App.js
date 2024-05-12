import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Service from "./views/Service";
import About from "./views/About";
import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import NotFound from "./views/NotFound";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import Footer from "./components/footer/Footer";

const navbarTexts = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    notFound: "404 Page Not Found",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    notFound: "404 Página No Encontrada",
  },
};

function App() {
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    const handleLanguageChange = () => {
      setUserLanguage(navigator.language.split("-")[0]);
    };

    handleLanguageChange(); // Para establecer el idioma inicialmente

    window.addEventListener("languagechange", handleLanguageChange);

    return () => {
      window.removeEventListener("languagechange", handleLanguageChange);
    };
  }, []);

  console.log("Idioma detectado:", userLanguage);

  const navbarText = navbarTexts[userLanguage] || navbarTexts["es"];

  return (
    <Router>
      <Navbar
        homeText={navbarText.home}
        aboutText={navbarText.about}
        servicesText={navbarText.services}
        notFoundText={navbarText.notFound}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer
        homeText={navbarText.home}
        aboutText={navbarText.about}
        servicesText={navbarText.services}
        notFoundText={navbarText.notFound}
      />
    </Router>
  );
}

export default App;
