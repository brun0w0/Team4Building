import React, { useState } from "react";
import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "¿Qué es Team4Building?",
            answer: "Es una plataforma que conecta empresas que ofrecen actividades de team building con organizaciones que buscan mejorar la cohesión de sus equipos de trabajo."
        },
        {
            question: "¿Cómo puede una empresa registrarse?",
            answer: "Las empresas pueden registrarse creando una cuenta y completando su perfil con la información de sus servicios."
        },
        {
            question: "¿Tiene algún costo el registro?",
            answer: "Actualmente, el registro y publicación de servicios en la plataforma es gratuito."
        },
        {
            question: "¿Quién puede utilizar esta plataforma?",
            answer: "Está diseñada tanto para empresas que ofrecen actividades como para organizaciones interesadas en contratarlas."
        },
        {
            question: "¿Cómo puedo buscar una empresa o servicio?",
            answer: "Puedes usar el buscador de la plataforma o dirigirte al apartado 'Empresas' en la barra de navegación para encontrar empresas que se ajusten a tus necesidades."
        },
        {
            question: "¿Puedo actualizar mi información después de registrarme?",
            answer: "Sí, desde tu panel de usuario puedes editar tus datos y la información de tus servicios en cualquier momento."
        },
        {
            question: "¿Qué tipo de actividades puedo encontrar?",
            answer: "Desde dinámicas al aire libre y deportes extremos hasta talleres virtuales, capacitación y actividades creativas."
        },
        {
            question: "¿Es seguro compartir mis datos en la plataforma?",
            answer: "Sí, protegemos la información de nuestros usuarios y usamos protocolos seguros para su manejo."
        },
    ];


    const toggleFAQ = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Header />
            <div className="faq-container">
                <h1>Preguntas Frecuentes</h1>
                {faqData.map((item, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {item.question}
                        </div>
                        <div className="faq-answer">
                            {activeIndex === index && <p>{item.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default FAQ;
