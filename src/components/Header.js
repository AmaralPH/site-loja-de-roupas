import React from 'react';
// import logo from '../img/logo-camisa-2.png';
import '../App.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img className="logo-img" />
                    {/* <span>Camisas Básicas</span> */}
                </div>
                <input type="text" className="busca" placeholder="Busca"></input>
                <nav className="contatos">
                    <div className="instagram links">Instagram
                        
                    </div>
                    <div className="whatsapp links">WhatsApp</div>
                    <div className="facebook links">Facebook</div>
                    <div className="suporte links">Suporte</div>
                </nav>
                <div className="carrinho">
                    <span>R$97,89</span>
                    <div className="car-icon" />
                </div>
            </header>
        );
    }
}

export default Header