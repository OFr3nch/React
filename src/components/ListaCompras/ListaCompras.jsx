import React, { useState } from "react"

function ListaCompras() {
    const [itens, setItens] = useState([])
    const [novoItem, setNovoItem] = useState("")

    const adicionarItem = () => {
        if (novoItem.trim() === "") return;
        setItens([...itens, novoItem]);
        setNovoItem("")
    };

    return (
        <div>
            <h2>Lista de Compras</h2>

            <input
                type="text"
                value={novoItem}
                onChange={(e) => setNovoItem(e.target)}
                placeholder="Digite um item"
            />
            <button onClick={adicionarItem}>Adicionar</button>

            <ul>
                <li>Número de itens: {itens.length}</li>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCompras