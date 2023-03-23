const Tabellina = (props) => {
    const moltiplicatori = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <ul>
            {moltiplicatori.map((num) => {
                return <li>{num * props.numero}</li>;
            })}
        </ul>
    );
};

export default Tabellina;
