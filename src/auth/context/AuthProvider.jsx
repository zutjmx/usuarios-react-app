import PropTypes from 'prop-types';
import { useAuth } from '../hooks/useAuth';
import { AuthContexto } from './AuthContexto';

export const AuthProvider = ({children}) => {

    const {login, handlerLogin, handlerLogout} = useAuth();
    
    return (
        <>
            <AuthContexto.Provider
                value={
                    {
                        login, handlerLogin, handlerLogout
                    }
                }
            >
                {children}
            </AuthContexto.Provider>
        </>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.any,
}
