import React, { useEffect, useState } from "react";

const EsempioUseEffect = () => {
    const [valore, setValore] = useState(0);

    useEffect(() => {
        console.log("Ho chiamato use effect");

        if (valore < 1) {
            document.title="Nessun valore";
        } else {
            document.title="C'è qualcosa...";
        }

        return () => {
            console.log("Prima del prossimo render");
        };
    }, [valore]);
    
    return (
        <div>
            <p>use effect {valore}</p>

            <button onClick={() => setValore(valore + 1)}>Aumenta</button>
        </div>
    );
};
export default EsempioUseEffect;
