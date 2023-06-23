import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';

import { UsuarioContexto } from '../context/UsuarioContexto';

export const VistaTablaPF = () => {

    const { usuarios } = useContext(UsuarioContexto);

    const [usuariosAux, setUsuariosAux] = useState([]);

    useEffect(() => {
        setUsuariosAux(usuarios);
    }, [usuarios]);


    return (
        <div className="card my-4 mx-4">
            <h5 className="card-header">Lista de Usuarios</h5>
            <div className="card-body">
                <DataTable 
                    value={usuariosAux}
                    showGridlines
                    stripedRows 
                    tableStyle={{ minWidth: '50rem' }}
                >
                    <Column field="id" header="Id" sortable ></Column>
                    <Column field="username" header="Usuario" sortable ></Column>
                    <Column field="email" header="Email" sortable ></Column>
                </DataTable>
            </div>
        </div>
    );
}
