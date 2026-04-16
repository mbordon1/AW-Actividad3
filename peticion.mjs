import {obtenerUsuarios, obtenerUsuariosFiltrados} from './usuarios.mjs'

export async function manejarRuta(peticion,respuesta){
    if(peticion.method === 'GET'){
        if (peticion.url === '/usuarios'){
            try {
                const usuarios = await obtenerUsuarios()
                respuesta.statusCode = 200
                respuesta.setHeader('Content-Type', 'application/json')
                return respuesta.end(JSON.stringify(usuarios, null, 2))
            }
            catch(error){
                respuesta.statusCode = 500 //errores del servidor 
                return respuesta.end(JSON.stringify({ error: error.message }))
            }
        }
        if (peticion.url === '/usuarios/filtrados') {
            try {
                const filtrados = await obtenerUsuariosFiltrados()
                respuesta.statusCode = 200
                respuesta.setHeader('Content-Type', 'application/json')
                return respuesta.end(JSON.stringify(filtrados, null, 2))
            } catch (error) {
                respuesta.statusCode = 500
                return respuesta.end(JSON.stringify({ error: error.message }))
            }
        }
    }
    
    //fallback
    respuesta.statusCode = 404
    return respuesta.end(JSON.stringify({ error: 'Recurso no encontrado' }))
}