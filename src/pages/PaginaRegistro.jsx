import PropTypes from 'prop-types';
import { useEffect } from 'react';
//import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { VistaFormaUsuario } from '../components/VistaFormaUsuario';
//import { UsuarioContexto } from '../context/UsuarioContexto';
import { useUsuarios } from '../hooks/useUsuarios';

export const PaginaRegistro = () => {
    //const {usuarioFormaInicial, usuarios=[]} = useContext(UsuarioContexto);
    const {usuarioFormaInicial, usuarios=[]} = useUsuarios();

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(usuarioFormaInicial);
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            const usuario = usuarios.find(u => u.id == id) || usuarioFormaInicial;
            setUsuarioSeleccionado(usuario);
        }        
    },[id, usuarios, usuarioFormaInicial]);

    return (
        <>
            <div className="card my-4 mx-4">
                <h4 className="card-header">
                    {usuarioSeleccionado.id > 0 ? 'Editar Usuario' : 'Registro de Usuario'}                    
                </h4>
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <VistaFormaUsuario
                                usuarioSeleccionado={usuarioSeleccionado}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

PaginaRegistro.propTypes = {
    handlerAgregaUsuario: PropTypes.any,
    usuarioFormaInicial: PropTypes.object,
    usuarios: PropTypes.array,
}