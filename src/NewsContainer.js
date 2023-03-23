import React, { useState } from "react";
import CardNews from "./CardNews";
import { News } from "./News";

const NewsContainer = () => {
    const news = News;
    const [sfondo, setSfondo] = useState(false);

    return (
        <div
            style={{
                width: "80%",
                display: "flex",
                gap: "20px",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "20px",
                backgroundColor: sfondo ? "#474747" : "white"
            }}
        >
            <h1>News</h1>

            {news.map((news) => {
                return (
                    <CardNews
                        id={news.id}
                        title={news.title}
                        text={news.text}
                        day={news.day}
                        key={news.id}
                    ></CardNews>
                );
            })}

            <footer>
                <button onClick={() => setSfondo(!sfondo)}>Cambia sfondo</button>
            </footer>
        </div>
    );
};

export default NewsContainer;
