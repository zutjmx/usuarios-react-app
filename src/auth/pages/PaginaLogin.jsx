export const PaginaLogin = () => {
    return (
        <>
            <div className="modal" style={{display: 'block'}} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="/circulo-de-usuario.svg" id="icon" alt="User Icon" width="100px" height="100px" />
                            <h5 className="modal-title">Capture sus datos de usuario</h5>
                        </div>
                        <form>
                            <div className="modal-body">
                                <input 
                                    type="text" 
                                    className="form-control my-3 w-75" 
                                    placeholder="Usuario" 
                                    name="username"
                                />
                                <input 
                                    type="password" 
                                    className="form-control my-3 w-75" 
                                    placeholder="Contraseña" 
                                    name="password"
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}