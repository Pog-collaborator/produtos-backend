var express = require('express');

const server = express();


var produtos = [

{ id: 1, nome: 'computador', preco: 1200.20},
{ id: 2, nome: 'mouse', preco: 20.50},
{ id: 4, nome: 'teclado', preco: 220.50},

];


server.get('/produto', function(request, response){
    return response.json(produtos);
})

server.get('/produto/:id', function(request, response){

   const id = request.params.id;

   const produto = produtos.filter(p => p.id == id);

    return response.json(produto);
})


server.listen(3000);
