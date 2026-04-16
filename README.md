# AW - ACTIVIDAD 3

1. Importar modulos necesarios: http, fs/promises, path
2. Definir la URL de la API externa y la ruta del archivo local
3. Crear el servidor y evaluar metodo y URL de cada peticion
4. Si GET /usuarios:
 --fetch a la API externa
 --guardar resultado en archivo .json
 --leer el archivo
 --enviar al cliente con código 200
  5. Si GET /usuarios/filtrados:
 --mismo flujo pero filtrar ID < 10 antes de responder
 6. Cualquier otra ruta o verbo: responder 404
