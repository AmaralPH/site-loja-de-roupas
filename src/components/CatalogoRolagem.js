import React from 'react';
import '../App.css';


class CatalogoRolagem extends React.Component {
    render() {
        const listaProdutos = ['prod1', 'prod2', 'prod3', 'prod4']
        return (
            <div className="container rolagem">
                <div className="seta voltar">{"<"}</div>
                {listaProdutos.map((produto, i) => {
                    return <div className={ "cardProduto " + produto }>{ "Produto " + (i +1) }</div>
                })}
                <div className="seta avancar">{">"}</div>
            </div>
        );
    }
}

export default CatalogoRolagem;