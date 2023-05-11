import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';


export const App = () => {

    const [tareas, setTareas] = useState();

    const mostrarTareas = async () => {

        try {

            const response = await fetch("api/tarea/Lista");
            if (response.ok) {
                const data = await response.json();                
                console.log(data);
                setTareas(data);                                               
            } else {
                console.log("status code " + response.status);
            }
        }
        catch (err) {
            console.log(err);
        }

       
        
    }

    useEffect(() => {
        mostrarTareas();        
    }, []);

    return (
        <>
            <div className="container bg-dark p-4 vh-100">
                <h2 className="text-white"> Lista de tareas</h2>
                <div className="row">
                    <div className="col-sm-12"></div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12">
                        <div className="list-group">
                            {
                                tareas?.map(
                                    (item) => (
                                        <div key={ item.idTarea } className="list-group-item list-group-item-action">
                                            <h1 className="text-primary">{ item.descripcion }</h1>
                                        </div>
                                    )
                                )
                            }
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    );
}