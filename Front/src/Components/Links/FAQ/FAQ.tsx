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
            answer: "Una empresa puede registrarse llenando un formulario con sus datos y luego publicar sus servicios en la plataforma."
        },
        {
            question: "¿Tiene algún costo el registro?",
            answer: "Por el momento, el registro y publicación de servicios en la plataforma es completamente gratuito."
        },
        {
            question: "¿Quién puede utilizar esta plataforma?",
            answer: "Está diseñada tanto para empresas proveedoras de servicios como para organizaciones interesadas en contratar actividades de integración laboral."
        }
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
