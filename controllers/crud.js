const conexion = require('../database/db');
//El archivo de BD ya fue exportado como conexion

exports.save =(req,res)=>{ //funcion flecha habitual
    const user = req.body.user; //lo que se ha definido en el formulario de captura y se asigna a una variable
    const rol = req.body.rol;
    console.log(user + ' -' + rol);
    conexion.query('INSERT INTO users SET ?', {user:user, rol:rol}, (error,results)=>{//funcion flecha
        if(error){
            console.log(error) ;
        
        }else{
            res.redirect('/');
            console.log("insertado correctamente") ;
            //los resultados se envian a la variable results
           // res.send(results);
        }

    })
}

exports.update =(req,res)=>{ //funcion flecha habitual
    const id = req.body.id; 
    const user = req.body.user; //lo que se ha definido en el formulario de captura y se asigna a una variable
    const rol = req.body.rol;
    console.log(user + ' -' + rol);
    //una vez se tienen los datos nuevos para modificar se arma la sentencia de BD
    conexion.query('UPDATE users SET ? WHERE id = ?', [{user:user, rol:rol} , id], (error,results)=>{//funcion flecha
        if(error){
            console.log(error) ;
        
        }else{
            res.redirect('/');
            console.log("Actualizado correctamente") ;
            console.log ("UPDATE users SET ", user + ","+ rol + " WHERE id = " + id);
            //los resultados se envian a la variable results
           // res.send(results);
        }

    })
}