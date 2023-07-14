import { faker } from '@faker-js/faker/locale/es_MX';

const generaArrNumerico = () => {
    let numeros = [];
    //Se llena un arreglo de números
    for (let index = 0; index < 30; index++) {
        const numero = faker.number.int({min:100,max:200});
        numeros.push(numero);
    }
    //Se quitan duplicados con filter
    let resultado = numeros.filter((item,index)=>{
        return numeros.indexOf(item) === index;
    });
    return resultado;
}

export const generaDatos = () => {
    let datos = [];
    const numerosIds = generaArrNumerico();
    for (let index = 0; index < numerosIds.length; index++) {
        const dato = {
            //empresa: faker.company.name(),
            ventas: faker.number.float({min:1000,max:10000}),
            ingresos: faker.number.float({min:1000,max:10000}),
            //year: faker.date.recent({days:5})
        }
        datos.push(dato);
    }
    return datos;
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
        admin: false
    }
    return usuario;
}

export const generaUsuarioLoginVacio = () => {
    const usuario = {
        username: '',
        password: '',
    }
    return usuario;
}
