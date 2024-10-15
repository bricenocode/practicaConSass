import SocailItem from "./SocialItem"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <ul className="footer__container__items">
                    <SocailItem
                        imagen='instagramLogo'
                    />
                    <SocailItem
                        imagen='facebookLogo'
                    />
                    <SocailItem
                        imagen='mapsLogo'
                    />
                </ul>
                <p className="footer__legals">Derecho reservados</p>
            </div>
        </footer>
    )
}
