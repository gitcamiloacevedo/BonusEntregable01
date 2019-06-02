const file_save = require('fs');
var open = require('open');
var express = require('express')
var app = express()

//FUNCIÓN PARA CREAR EL SITIO WEB
function init_server (text_web){
    app.get('/', function(request, response){
        response.send(
            '<!DOCTYPE html>'+
                '<html lang="es">'+
                    '<head>'+
                        '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
                        '<title>BONUS ENTREGA 01</title>'+
                    '</head>'+
                    '<body style="width: 80%; margin-top:20px; margin: auto; padding-top:20px;">' + 
                        text_web + 
                    '</body>'+
                '</html>'
            );
    })
    app.listen(8080);

    console.log("Servidor funcionando en http://localhost:8080/");
    open('http://localhost:8080');
}

//FUNCIÓN PARA CREAR EL ARCHIVO DE TEXTO
function createFile (texto_archivo, nombre_archivo) {
    file_save.writeFile(nombre_archivo, texto_archivo, (err) =>{
        if (err) throw (err);
        console.log('Se ha creado correctamente el archivo')
    });

}

module.exports = {
    init_server,
    createFile,
};