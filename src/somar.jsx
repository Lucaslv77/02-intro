import React, {useState} from "react";


export default function Somar() {
    
    const [inputA, setInputA] = useState(0);
    const [inputB, setInputB] = useState(0);
    const [resultado, setResultado] = useState(0);

    const somar = () => {
        const numA = parseFloat(inputA);
        const numB = parseFloat(inputB);

        setResultado(numA + numB);
    }

    return(
     <div>
        <h3>somador</h3>
        <input type="number" value={inputA} onChange={(e) => setInputA(e.target.value)} placeholder="Digite um Número" />
        <input type="number" value={inputB} onChange={(e) => setInputB(e.target.value)} placeholder="Digite outro Número" />
        <button onClick={somar}>Somar</button>
        <p>{resultado}</p>
     </div>
    )
}