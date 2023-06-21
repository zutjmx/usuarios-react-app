export const loginUser = (userLogin) => {
    //TODO: Implementar validación de acceso del backend.
    return (userLogin.username === 'zutjmx' && userLogin.password === 'sistemas')? true : false;
}
