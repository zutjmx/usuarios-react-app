export const UsuariosApp = () => {
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">

                    <div className="fadeIn first">
                        <img src="/circulo-de-usuario.svg" id="icon" alt="User Icon" />
                    </div>

                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="Usuario" />
                        <input type="text" id="password" className="fadeIn third" name="password" placeholder="Contraseña" />
                        <input type="submit" className="fadeIn fourth" value="Entrar" />
                    </form>

                </div>
            </div>
        </>
    );
}
