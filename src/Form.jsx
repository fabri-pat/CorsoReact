import React from "react";

const Form = () => {
    const gestioneDati = () => {
        console.log("ho fatto submit")
    }

    return (
        <form onSubmit={gestioneDati}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        placeholder="nome"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="cognome">Cognome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cognome"
                        placeholder="cognome"
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Form;
