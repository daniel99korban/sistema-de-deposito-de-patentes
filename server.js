const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");

// Config
    // inportar arquivos estaticos
    app.use(express.static(path.join(__dirname, "assets")));
    // Templete engine com isto nos agora não precisamos rescrever as estruturas básicas do html
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Rotas
    app.get('/', function(req, res){// Rota principal
        res.render("home");
    });

    app.get('/login', function(req, res){
        res.render("login");
    });

    app.get('/cadastro', function(req, res){
        res.render("cadastro");
    });

app.listen(5000, ()=>{
    console.log("Servidor rodando na port: 5000");
});