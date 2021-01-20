import React from 'react';
import '../App.css'

class Destaques extends React.Component {
    render() {
        return (
            <section className="destaques">
                <div className="container promo1">
                    <div className="fotoPromo">
                        Imagem promoção
                    </div>
                </div>
                <div className="container promo2">
                    <h2>Produto em destaque</h2>
                    <div className="fotoPromo2" />
                    <div className="atributos">
                        <span className="atrib">Cinco cores</span>
                        <span className="atrib">100% algodão</span>
                        <span className="atrib">Tecido macio</span>
                        <span className="atrib">Camisa básica</span>
                        <span className="atrib">Mais comprada</span>
                        <span className="atrib">Melhor custo</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default Destaques;