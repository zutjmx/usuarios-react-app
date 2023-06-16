export const usuariosReducer = (state = [], action) => {
    switch (action.type) {
        case 'agregarUsuario':
            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];
        case 'actualizarUsuario':
            return state.map(u => {
                if(u.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return u;
            });
        case 'borrarUsuario':
            return state.filter(usuario => usuario.id !== action.payload);
        default:
            return state;
    }
}
