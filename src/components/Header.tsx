



export default function Header() {



    return (
        <div>
            <header >
                <nav className="nav">
                    <img src="../../public/img/logo.png" alt="logo de coche" className="nav__logo"/>
                    <ul className="nav__items">
                        <li className="nav__items--items"><a href="#">Inicio</a></li>
                        <li className="nav__items--items"><a href="#">Coches</a></li>
                        <li className="nav__items--items"><a href="#">Sobre Nosotros</a></li>
                        <li className="nav__items--items"><a href="#">Seguros</a></li>
                        <li className="nav__items--items"><a href="#form">Contacto</a></li>
                    </ul>
                    
                </nav>
            </header>
        </div>
    )
}
