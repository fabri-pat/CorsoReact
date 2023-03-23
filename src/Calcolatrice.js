import React, { useRef, useState } from "react";

const Calcolatrice = () => {
    const input1 = useRef(null);
    const input2 = useRef(null);
    const [operand, setOperand] = useState();
    const [result, setResult] = useState(0);

    const handleSelection = (e) => {
        setOperand(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var x = parseInt(input1.current.value);
        var y = parseInt(input2.current.value);

        if ( !(isNaN(x) || isNaN(y)) ) {
            switch (operand) {
                case "+":
                    setResult(x + y);
                    break;
                case "-":
                    setResult(x - y);
                    break;
                case "/":
                    setResult(x / y);
                    break;
                case "*":
                    setResult(x * y);
                    break;
            }
        } else {
          setResult("Err")
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={input1}
                    placeholder="Primo numero"
                ></input>
                <input
                    type="text"
                    ref={input2}
                    placeholder="Secondo numero"
                ></input>
                <select onChange={handleSelection}>
                    <option value="">Inserisci operando</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                    <option value="*">*</option>
                </select>
                <br />
                <button type="submit">Invia</button>
            </form>
            {result}
        </div>
    );
};

export default Calcolatrice;
