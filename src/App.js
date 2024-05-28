import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Service from "./views/ourService/Service";
import About from "./views/about/About";
import Home from "./views/home/Home";
import Contact from "./views/contact/Contact";
import NotFound from "./views/notFound/NotFound";
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
    services: "services",
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
        contactText={navbarText.contact}
        notFoundText={navbarText.notFound}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
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
