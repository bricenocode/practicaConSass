


export default function Form() {
    return (
        <>
            <h2 id="formulario">Contacto</h2>
            <div className="contacto">
                <div className="contacto__info">
                    <p><span>Nombre de la Empresa:</span> TechWorld Solutions S.L.</p>
                    <p><span>Domicilio Social:</span> Calle Innovación, 15, 28045 Madrid, España</p>
                    <p><span>Correo Electrónico:</span> contacto@techworldsolutions.com</p>
                    <p><span>Teléfono de Contacto:</span> +34 910 123 456</p>
                    <p><span>CIF/NIF:</span> B12345678</p>

                </div>
                <div>
                    <img className="contacto__map" src="../../public/img/ubicacionContacto.png" alt="" />
                </div>
                <div>
                    <div className="form">
                        <form className="form__display" id="form" action="">
                            <div>
                                <label className="form__display--label" htmlFor="name">
                                    Nombre:
                                    <input className="form__display--label input" id="name" type="text" placeholder="Introduce tu Nombre" />

                                </label>
                            </div>
                            <div>
                                <label className="form__display--label" htmlFor="secondName">
                                    Apellidos:
                                    <input className="form__display--label input" id="secondName" type="text" placeholder="Introduce tu Apellido" />

                                </label>
                            </div>
                            <div className="center">
                                <label className="center--label" htmlFor="email">
                                    Email:
                                    <input className="center--label input" id="email" type="email" placeholder="Introduce tu Email" />

                                </label>
                                <label className="center--label" htmlFor="phone">
                                    Móvil:
                                    <input className="center--label input" id="phone" type="phone" placeholder="Introduce tu Móvil" />

                                </label>
                            </div>
                            <div>
                                <label className="form__display--label" htmlFor="comment">
                                    Comentario:
                                    <textarea className="form__display--label input" id="comment" placeholder="Dejanos tu comentario!">
                                    </textarea>
                                </label>
                            </div>
                            <input className="form__button" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
