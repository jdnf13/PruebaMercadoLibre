const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());

//configuraciones
//app.set('port', process.env.PORT || 3000)//configuramos el puerto por el que escucha el app
app.set('json spaces',2);//identado para json


//uso de morgan para ver peticiones desde consola
app.use(morgan('dev'));
//Uso de express para soportarn Json
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas importadas del archivo index.js de rutes
app.use(require('./rutes/index.js'))

//Empieza servidor
app.listen(3000,"0.0.0.0", () =>{
    console.log(`Listening...port 3000`)
});