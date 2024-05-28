import React from "react";
import "./About.css";

function About() {
  const startYear = 2010;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div className="about-container">
      <div className="about-details">
        <div className="about-imagen">
          {" "}
          <img src="/images/team.jpg" alt="Image 1" />
        </div>

        <div className="about-static">
          <div>
            <p>Años de experiencia: {yearsOfExperience} años</p>
            <p>Proyectos Realizados: 35</p>
          </div>
          <div>
            <p>Clientes Satisfechos: 30</p>
            <p>Empleados: 10K</p>
          </div>
        </div>
      </div>
      <div className="about-content">
        <h2>Acerca de nuestra empresa ecológica</h2>
        <h3>¡Bienvenido a nuestra página Acerca de!</h3>
        <p>
          En BIO, estamos comprometidos con la protección del medio ambiente y
          la sostenibilidad. Creemos que es nuestra responsabilidad cuidar
          nuestro planeta y reducir nuestro impacto ambiental en todas nuestras
          operaciones.
        </p>
        <p>
          Nuestra empresa se esfuerza por implementar prácticas empresariales
          responsables que minimicen nuestra huella ecológica y fomenten un
          futuro más verde para las generaciones venideras.
        </p>
        <p>Algunos de nuestros compromisos ambientales incluyen:</p>
        <ul>
          <li>Utilización de energía renovable en nuestras instalaciones.</li>
          <li>Reducción y gestión eficiente de residuos.</li>
          <li>Promoción del transporte sostenible entre nuestros empleados.</li>
          <li>
            Participación en programas de reforestación y conservación de la
            biodiversidad.
          </li>
        </ul>
        <p>
          En BIO, cada uno de nosotros se esfuerza por ser un agente de cambio
          positivo para el medio ambiente. Juntos, estamos trabajando para
          construir un futuro más limpio y sostenible.
        </p>
      </div>
    </div>
  );
}

export default About;
