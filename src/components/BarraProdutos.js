import React from 'react';
import '../App.css';

class BarraProdutos extends React.Component {
    render () {
        const listaCategorisas = ['Camisas Básicas', 'Calças', 'Bermudas', 'Combos', 'Outros', 'Sobre nós']

        return (
            <div className="barra-produtos">
                {listaCategorisas.map((produto) => {
                    return <span className="categoria" key="produto">{produto}</span>
                })}
            </div>
        )
    }
}

export default BarraProdutos;