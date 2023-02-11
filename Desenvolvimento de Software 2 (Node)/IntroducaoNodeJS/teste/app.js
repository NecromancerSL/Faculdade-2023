var http = require("http"); //require vincula a função, funciona como import
var fs = require("fs"); //pacote filesystem, para ler e escrever arquivos no browser

http.createServer(function(request, response){
   fs.readFile("index.html", function(erro, conteudo){//vai ler o html
    if(erro)
        console.log("erro");
    else
        response.write(conteudo);//mostra o html caso não haja erros
    response.end();
   });
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");