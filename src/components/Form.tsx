


export default function Form() {
    return (
    <div>
        <form id="form" action="">
            <fieldset>
                <legend>Formulario de contacto</legend>
                <label htmlFor="name">
                    Nombre:<br/>
                    <input name="name" type="text" />
                    <br/>
                </label>
                <label htmlFor="">
                    Apellidos:<br/>
                    <input name="secondName" type="text" />
                    <br/>
                </label>
                <label htmlFor="email">
                    Email:<br/>
                    <input name="email" type="email" />
                    <br/>
                </label>
                <label htmlFor="phone">
                    Móvil:<br/>
                    <input name="phone" type="phone" />
                    <br/>
                </label>
                <label htmlFor="comment">
                    Comentario:<br/>
                    <textarea name="comment" id="comment" placeholder="Escribe lo que quieras...">
                    </textarea>
                    <br/>
                </label>
            </fieldset>
        </form>
    </div>
    )
}
