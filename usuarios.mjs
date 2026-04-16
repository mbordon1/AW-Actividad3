import fs from 'node:fs/promises'
import path from 'node:path'

const rutaUsuarios = path.join('data', 'usuarios.json')
const api = 'https://api.escuelajs.co/api/v1/users'

async function obtenerDatosApi(){
    const respuesta = await fetch(api)

    if (!respuesta.ok){
        throw new Error('Error al consultar la API')
    }

    const usuarios = await respuesta.json()

    return usuarios
}

async function guardarEnArchivo(datos){
    const contenido = JSON.stringify(datos, null, 2)

    await fs.writeFile(rutaUsuarios, contenido, 'utf-8')
}

async function leerArchivo(){
    const contenido = await fs.readFile(rutaUsuarios, 'utf-8')
    return JSON.parse(contenido)
}

export async function obtenerUsuarios(){
    const usuarios = await obtenerDatosApi()
    await guardarEnArchivo(usuarios)
    const usuariosGuardados = await leerArchivo()
    return usuariosGuardados
}

export async function obtenerUsuariosFiltrados(){
    const todos = await obtenerUsuarios()
    const filtrados = todos.filter(usuario => usuario.id < 10)
    return filtrados
}





