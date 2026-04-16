import http from 'node:http'
import { manejarRuta } from './peticion.mjs'

const servidor = http.createServer(async(peticion, respuesta) =>{
    try{
        await manejarRuta(peticion, respuesta)
    }
    catch{
        respuesta.statusCode = 500
        respuesta.end(JSON.stringify({ error: error.message }));
    }
})

servidor.listen(3000,'localhost', () =>{
    console.log('Servidor escuchando en http://localhost:3000')
})




