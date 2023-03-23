import React, { useState } from "react";

const CardNews = ({id, title, text, day}) => {
    const [nightTheme, setNightTheme] = useState(false);
    return (
        <div
            style={{
                width: "350px",
                backgroundColor: nightTheme ? "#474747" : "white",
            }}
            className="card text-center"
            key={id}
        >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => setNightTheme(!nightTheme)}
                >
                    {nightTheme ? "Tema chiaro" : "Tema scuro"}
                </a>
            </div>
            <div className="card-footer text-muted">{day}</div>
        </div>
    );
};

export default CardNews;
