
import { Button } from 'primereact/button';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import { useState } from 'react';

export const VistaPrimeReact = () => {
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <div className="card my-4 mx-4">
                <h5 className="card-header">Componentes PrimeReact</h5>
                <div className="card-body">
                    <h5 className="card-title">Estos son los componentes</h5>
                    <div className="my-2">
                        <p className="card-text">Botón</p>
                        <Button label="Enviar" icon="pi pi-check" size="small"/>
                    </div>
                    <div className="my-2">
                        <p className="card-text">Botón con animación</p>
                        <Button label="Submit" icon="pi pi-check" loading={loading} onClick={load} size="small"/>
                    </div>                    
                </div>
            </div>
        </>
    );
}
