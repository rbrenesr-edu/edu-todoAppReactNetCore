import 'bootstrap/dist/css/bootstrap.min.css'
import { data } from 'jquery';
import { useEffect, useState } from 'react';

export const App = () => {

    const [tareas, setTareas] = useState();
    const [descripcion, setDescripcion] = useState('');

    const mostrarTareas = async () => {

        try {

            const response = await fetch("api/tarea/Lista");
            if (response.ok) {
                const data = await response.json();                                
                setTareas(data);     
                console.log(data);                                          
            } else {
                console.log("status code " + response.status);
            }
        }
        catch (err) {
            console.log(err);
        }               
    }

    const formatDate =(string)=>{
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        let fecha = new Date(string).toLocaleDateString('es-PE', options);
        let hora = new Date(string).toLocaleTimeString();
        return fecha + ' | ' + hora;

    }

    useEffect(() => {
        mostrarTareas();        
    }, []);

    const guardarTareas = async(e)=>{
        e.preventDefault();
        
        const response = await fetch("api/tarea/Guardar",{
            method:'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( {descripcion: descripcion} )            
        });

        if(response.ok){
            setDescripcion('');
            await mostrarTareas();
        }
    }

    const cerrarTarea = async(id)=>{
                
        const response = await fetch("api/tarea/Cerrar/"+id,{
            method:'DELETE',          
        });

        if(response.ok){            
            await mostrarTareas();
        }
    }


    return (
        <>
            <div className="container bg-dark p-4 vh-100">
                <h2 className="text-white"> Lista de tareas</h2>
                <div className="row">
                    <div className="col-sm-12">
                        
                        <form onSubmit={ guardarTareas }>
                            <div className='input-group'>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Descripción'
                                    value={descripcion}
                                    onChange={ (e)=>{ setDescripcion(e.target.value) } }
                                ></input>
                                <button type='submit' className='btn btn-success'>Agregar</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12">
                        <div className="list-group">
                            {
                                tareas?.map(
                                    (item) => (
                                        <div key={ item.idTarea } className="list-group-item list-group-item-action">
                                            <h1 className="text-primary">{ item.descripcion }</h1>
                                            <div className='d-flex justify-content-between'>
                                                <small className='text-muted'>{ formatDate( item.fechaRegistro ) }</small>
                                                <button className='btn btn-sm btn-outline-danger'
                                                onClick={ ()=>cerrarTarea(item.idTarea)}
                                                >Cerrar</button>
                                            </div>

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