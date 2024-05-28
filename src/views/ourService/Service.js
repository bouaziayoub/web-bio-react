import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="services-container">
      <div className="service-header">
        <h2>Nuestros Servicios</h2>
      </div>

      <div className="service-body">
        <div className="service">
          <img src="/images/service1.jpg" alt="Service 1" />
          <div className="service-content">
            <h3>Servicio de Consultoría Ambiental</h3>
            <p>Nuestro equipo de expertos ofrece servicios de consultoría ambiental para ayudar a su empresa a cumplir con las regulaciones ambientales, minimizar su impacto en el medio ambiente y promover la sostenibilidad en todas sus operaciones.</p>
          </div>
        </div>
        <div className="service">
          <img src="/images/service2.jpg" alt="Service 2" />
          <div className="service-content">
            <h3>Gestión de Residuos</h3>
            <p>Ofrecemos soluciones integrales para la gestión eficiente de residuos, incluyendo la reducción, reutilización, reciclaje y disposición adecuada de los mismos, contribuyendo así a la preservación del medio ambiente y el cumplimiento de las regulaciones ambientales.</p>
          </div>
        </div>
        <div className="service">
          <img src="/images/service3.jpg" alt="Service 3" />
          <div className="service-content">
            <h3>Evaluación de Impacto Ambiental</h3>
            <p>Nuestro equipo realiza evaluaciones detalladas del impacto ambiental de proyectos y actividades, identificando posibles riesgos y proponiendo medidas para mitigarlos, garantizando así un desarrollo sostenible y responsable.</p>
          </div>
        </div>
        <div className="service">
          <img src="/images/service4.jpg" alt="Service 4" />
          <div className="service-content">
            <h3>Educación Ambiental</h3>
            <p>Desarrollamos programas de educación ambiental adaptados a las necesidades de su empresa, con el objetivo de concienciar y capacitar a su personal sobre prácticas sostenibles, fomentando así una cultura corporativa comprometida con el medio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
