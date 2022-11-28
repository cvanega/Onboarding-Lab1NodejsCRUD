const express = require('express');
const app = express();

/*app.get('/',(req,res)=>{
    res.send('hola');
})*/
app.set('view engine','ejs');

//despues de invocar el motor de plantillas se debe especificar como se van a capturar los datos de los formularios
app.use(express.urlencoded({extended:false}));

//indicamos que se va a trabajar con json
//app.use(express(json));

app.use ('/',require ('./router'));

app.listen(5001,()=>[
    console.log ('Server corriendo en http://localhost:5001')
]);