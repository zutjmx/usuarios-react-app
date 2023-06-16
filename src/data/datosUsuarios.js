import { faker } from '@faker-js/faker/locale/es_MX';

const generaArrNumerico = () => {
    let numeros = [];
    //Se llena un arreglo de núemros
    for (let index = 0; index < 8; index++) {
        const numero = faker.number.int({min:100,max:200});
        numeros.push(numero);
    }
    //Se quitan duplicados con filter
    let resultado = numeros.filter((item,index)=>{
        return numeros.indexOf(item) === index;
    });
    return resultado;
}

export const generaArregloUsuarios = () => {
    let usuarios = [];
    const numerosIds = generaArrNumerico();
    for (let index = 0; index < numerosIds.length; index++) {
        const usuario = {
            id: numerosIds[index],
            username: faker.internet.userName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
        };
        usuarios.push(usuario);
    }
    return usuarios;
}

export const generaUsuarioVacio = () => {
    const usuario = {
        id: 0,
        username: '',
        password: '',
        email: '',
    }
    return usuario;
}
