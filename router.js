const express = require('express');
const router = express.Router();

const conexion = require('./database/db');
//hacemos referencia al archivo db.js

/*router.get('/contacto', (req,res)=>{
    res.send('CONTACTO');
})*/

router.get('/', (req,res)=>{
    //usamos la conexion en este punto
    //res.render('index');
//Mostrar todos los registros
    conexion.query('SELECT * FROM users', (error,results)=>{
        if(error){
            console.log(error) ;
        
        }else{
            res.render('index',{results:results});
            //los resultados se envian a la variable results
           // res.send(results);
        }
    })
})

//Ruta para crear registros
router.get('/create', (req,res)=>{
    res.render('create');
})

//Ruta para editar registros
router.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE id = ?',[id], (error,results)=>{
        if(error){
            console.log(error) ;
        
        }else{
            res.render('edit',{user:results[0]}); //se indica que vamos a pasar la plantilla edit
            //los resultados se envian a la variable results
           // res.send(results);
        }
    })
});  //:id para hacer paso del parametro
//dos parametros: ruta y funcion flecha

//Ruta para eliminar registros
router.get('/delete/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE id = ?',[id], (error,results)=>{
        if(error){
            console.log(error) ;
        
        }else{
            res.redirect('/'); //vamos a la ruta raiz
        }
    })
})


//se invocan los metodos para el CRUD
const crud = require('./controllers/crud');
router.post('/save', crud.save);
//cuando se crea en el formulaio se usa el metodo post
//el metodo /save hace referencia a crud.save

router.post('/update', crud.update);

module.exports = router;
//todas las rutas las podemos definir en este archivo