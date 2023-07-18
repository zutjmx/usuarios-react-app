import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { useState } from 'react';
import { useEffect } from 'react';

export const VistaGetPosts = () => {
    const [posts, setPosts] = useState();
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_POSTS_BASE_URL}/posts`)
          .then((response) => {
            return response.json()
          })
          .then((posts) => {
            setPosts(posts)
          })
      }, []);

    return (
        <>
            <div className="card my-4 mx-4">
                <h5 className="card-header">Lista de Posts</h5>
                <div className="card-body">
                    <DataTable 
                        value={posts}
                        showGridlines
                        stripedRows
                        paginator 
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50]} 
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column field="userId" header="Id de Usuario" sortable ></Column>
                        <Column field="id" header="Id del Post" sortable ></Column>
                        <Column field="title" header="Titulo" ></Column>
                        <Column field="body" header="Contenido" ></Column>
                    </DataTable>
                </div>
            </div>
        </>
    );
}