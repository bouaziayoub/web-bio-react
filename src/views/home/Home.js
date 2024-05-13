import React from "react";
import "./Home.css";

import Card from "../../components/card/Card";

function Home() {
     const cards = [
      {
        title: "Nuestros Servicios",
        description: "Adéntrate en un universo de soluciones diseñadas exclusivamente para ti. Desde productos artesanales hasta servicios personalizados, nuestra amplia gama de ofertas está cuidadosamente seleccionada para satisfacer tus necesidades más exigentes. Descubre cómo podemos hacer tu vida más fácil y cómoda con nuestras opciones innovadoras y de alta calidad.",
        image: "images/services.jpg",
      },
      {
        title: "Nuestra Historia",
        description: "Sumérgete en las páginas de nuestro pasado y descubre los capítulos que han dado forma a nuestra identidad. Desde nuestros modestos inicios hasta los hitos que hemos alcanzado, cada momento cuenta una historia de dedicación, superación y visión. Explora cómo hemos evolucionado a lo largo del tiempo, enfrentando desafíos y celebrando triunfos en el camino.",
        image: "images/history.jpg",
      },
      {
        title: "Nuestro Equipo",
        description: "Conoce a las personas detrás de nuestra misión: un equipo diverso y talentoso unido por un propósito común. Desde nuestros líderes inspiradores hasta nuestros empleados de base, cada miembro de nuestro equipo aporta su pasión y experiencia para hacer realidad nuestra visión compartida. Descubre cómo colaboramos, innovamos y nos apoyamos mutuamente para lograr resultados excepcionales.",
        image: "images/team.jpg",
      },
    ];
  return (
    <>
      <div className="home-bg">
        <div className="texto-bg">
          <h2>Creciendo contigo</h2>
          <p>Construyendo un futuro mejor</p>
        </div>
        <img src="images/home-bg.jpg" alt="home bg" />
      </div>

      {/* Usar card atraves de importarla del components */}
      <div className="container-cards">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} />
      ))}
      </div>
    </>
  );
}
export default Home;
