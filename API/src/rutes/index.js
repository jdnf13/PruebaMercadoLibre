const {Router} = require('express');
const router = Router();
const comentarios  = require('../comentario.json');
const _ = require('underscore');
//rutas de acceso
router.get('/',(req,res) => {
    const data = comentarios;
    console.log(data)
    res.json(data);
});

router.get('/version',(req,res) => {
    const data = {'Versión': '0.1.1 todos los derechos reservados'};
    console.log(data)
    res.json(data);
});

router.post('/', (req,res) => {
    console.log(req.body);
    const {email,Nombre,Website,Comentario} = req.body; //desetructuring data
    if(email && Nombre && Website && Comentario){
        const id = req.body.email;
        const nuevoComentario = {...req.body, id};
        console.log(nuevoComentario);
        comentarios.push(nuevoComentario);
        res.json({"mesaje":`Data recibida!`});
    }else{
        res.status(500).json({"error":"Se requieren todos los Datos!"});
    }
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    _.each(comentarios, (comentario, i) => {
        if(comentario.id == id){
            comentarios.splice(i,1);
            res.status(200).json({"mensaje":"Borrado con exito"});
        }else{
            res.status(402).json({"mensaje":"El comentario no existe"});
        }
    });
});


router.put('/:id', (req,res) => {
    const { id } = req.params;
    const {email,Nombre,Website,Comentario} = req.body; //desetructuring data
    if(email && Nombre && Website && Comentario){
        _.each(comentarios, (comentario, i) => {
            if(comentario.id == id){
                comentario.email = email;
                comentario.Nombre = Nombre;
                comentario.Website = Website;
                comentario.Comentario = Comentario;
                res.status(200).json({"mensaje":"Se modifico el Comentario"});
            }else{
                res.status(402).json({"mensaje":"El comentario no existe, inserta uno nuevo"});
            }
        });
    }else{
        res.status(500).json({"error":"Se requieren Datos!"});
    }
});

module.exports = router;