import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const decrementa = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div style={{ width: "400px", backgroundColor: '#e6f4fc' }} className="card">
            <div className="card-body">
                <h5 className="card-title">Contatore</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    Contatore con state hook di React
                </h6>
                <p className="card-text">
                    Un piccolo esercizio con uso degli state hook di react e
                    semplice template con bootstrap.
                </p>
                <p>Hai cliccato {count} volte</p>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        
                    }}
                >
                    <button
                        className="btn btn-primary"
                        onClick={() => setCount(count + 1)}
                    >
                        Incrementa
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => decrementa()}
                    >
                        Decrementa
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
