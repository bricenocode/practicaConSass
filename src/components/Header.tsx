



export default function Header() {



    return (
        <div>
            <header >
                <nav className="nav">
                    <img src="../../public/img/logo.png" alt="logo de coche" className="nav__logo"/>
                    <ul className="nav__items">
                        <li className="nav__items--items"><a href="#">Inicio</a></li>
                        <li className="nav__items--items"><a href="#coches">Coches</a></li>
                        <li className="nav__items--items"><a href="#seguros">Seguros</a></li>
                        <li className="nav__items--items"><a href="#galery">Galeria</a></li>
                        <li className="nav__items--items"><a href="#formulario">Contacto</a></li>
                        <li className="nav__items--items"><a href="#avisos">Avisos Legales</a></li>
                    </ul>
                    
                </nav>
            </header>

            
        </div>
    )
}
