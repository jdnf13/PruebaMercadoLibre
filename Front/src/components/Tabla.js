import {React, useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import FormComentarios from './FormComentarios';




export default function Tabla() {   

    const columnas = [
        {
            title:'Nombre',
            field:'Nombre',
        },
        {
            title:'Email',
            field:'email',
        },
        {
            title:'Website',
            field:'Website',
        },
        {
            title:'Comentario',
            field:'Comentario',
        }
    ];

   
    const [data, setDatos] = useState([]);
    const [comentario,setComentario] = useState({});
    const peticionData = () => {
        fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => setDatos(data));
    }
    
    const rows = [
    
    ];

    
    useEffect(() => {
        peticionData();
    },[]);

    const editarComentario = (data) => {
        setComentario(data);
        localStorage.setItem('tipoRequest',JSON.stringify('PUT'));

    }
    
        return (
            <div>
                <MaterialTable
                    columns={columnas}
                    data={data}
                    title="Comentarios guardados"
                    page={10}
                    actions={
                        [
                        {
                            icon: "edit",
                            tooltip:"Editar Comentario",
                            onClick:(event,rowData)=>editarComentario(rowData)
                        }
                        ]
                    }
                />
                <FormComentarios 
                    name={comentario.Nombre}
                    email={comentario.email}
                    website={comentario.Website}
                    comentario={comentario.Comentario}
                />
            </div>
          );
  
  
}
