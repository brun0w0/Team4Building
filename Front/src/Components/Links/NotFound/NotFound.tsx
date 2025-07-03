// src/Pages/NotFound/NotFound.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4000;
        const stepTime = 50;
        const increment = 100 / (duration / stepTime);

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + increment;
                return next >= 100 ? 100 : next;
            });
        }, stepTime);

        const timeout = setTimeout(() => {
            navigate("/");
        }, duration);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [navigate]);

    return (
        <div className="notfound-container">
            <div className="notfound-box">
                <h1>404</h1>
                <p>Página no encontrada</p>
                <p>¡Oops! Parece que no existe este sitio...</p>
                <span>Redirigiendo al inicio...</span>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
