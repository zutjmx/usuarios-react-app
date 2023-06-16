import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';
import { validaEmail } from '../services/servicioUsuarios';

export const VistaFormaUsuario = ({handlerAgregaUsuario, usuarioFormaInicial, usuarioSeleccionado}) => {
    const [formaUsuario, setFormaUsuario] = useState(usuarioFormaInicial);
    const {id, username,email,password} = formaUsuario;
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormaUsuario({
            ...formaUsuario,
            [name]: value,
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();        
        if(!username) {
            Swal.fire(
                'Formulario Usuario',
                'Se requiere el usuario',
                'info'
            );
            return;
        }
        if(!email) {
            Swal.fire(
                'Formulario Usuario',
                'Se requiere el email',
                'info'
            );
            return;
        }
        if (!validaEmail(email)) {
            Swal.fire(
                'Formulario Usuario',
                'Email inválido',
                'info'
            );
            return;
        }
        if(!password) {
            Swal.fire(
                'Formulario Usuario',
                'Se requiere la contraseña',
                'info'
            );
            return;
        }
        handlerAgregaUsuario(formaUsuario);
        setFormaUsuario(usuarioFormaInicial);
    }

    useEffect(() => {
        setFormaUsuario({
            ...usuarioSeleccionado,
        })
    }, [usuarioSeleccionado]);

    return (
        <>
            <div className="card my-3">
                <h5 className="card-header">Formulario de Usuario</h5>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input type="text" 
                                   className="form-control" 
                                   id="username"
                                   name="username"
                                   value={username} 
                                   placeholder="Usuario"
                                   onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="email" 
                                   className="form-control" 
                                   id="email"
                                   name="email"
                                   value={email} 
                                   placeholder="Email"
                                   onChange={onInputChange}
                            />
                        </div>
                        {id > 0 || 
                            <div className="mb-3">
                            <input type="password" 
                                   className="form-control" 
                                   id="password"
                                   name="password"
                                   value={password} 
                                   placeholder="Contraseña" 
                                   onChange={onInputChange}
                            />
                            </div>
                        }                        
                        <input type="hidden" name="id" value={id}/>
                        <button type="submit" className="btn btn-primary">
                            {id > 0 ? 'Actualizar': 'Agregar'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

VistaFormaUsuario.propTypes = {
    handlerAgregaUsuario: PropTypes.any.isRequired,
    usuarioFormaInicial: PropTypes.object.isRequired,
    usuarioSeleccionado: PropTypes.object.isRequired,
}
