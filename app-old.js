const http = require('http');

http.createServer((request, response) => {

        //response.writeHead(200, { 'Content-Type': 'application/json' });
        //response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        //response.writeHead(200, { 'Content-Type': 'application/csv' });

        /*const persona = {
            id: 1,
            name: 'Juan'
        }*/

        /*response.write('id, nombre\n');
        response.write('1, David\n');
        response.write('2, Diana\n');
        response.write('3, Andrea\n');
        response.write('4, Adriana\n');*/

        //response.write(JSON.stringify(persona));

        response.write('Hola Mundo');
        response.end(); // terminamos la peticion para mostrar
    })
    .listen(8080);

console.log('Escuchando el puerto: ', 8080)