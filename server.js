const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
// exportar models de tabelas
const { sequelize } = require('./models');
const db = require('./models/index');

const console = require("console");

 sequelize.sync().then(()=>{// feedback sobre conexões
     console.log("conexão com banco de dados realizada com sucesso :)");
 }).catch(()=>{
     console.log("ERRO DE CONEXÃO COM O BANCO DE DADOS :(");
 })

// Config
    // inportar arquivos estaticos
    app.use(express.static(path.join(__dirname, "assets")));
    // Templete engine com isto nos agora não precisamos rescrever as estruturas básicas do html
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    // Receber dados com o express
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
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

    app.get('/deposito-de-patentes', function(req, res){
        res.render("deposito-de-patentes");
    });
    // metodos posts
    app.post('/cad', /*async*/ (req, res)=>{// cadastro de usuario
        // const novoCadastro = req.body;
        // await db.cadastro.create(novoCadastro);
        res.redirect('/login');
        /*const novoCadastro = Cadastro.create({// inserindo na tabela
            nome: req.body.nome,
            endereco: req.body.endereco,
            contato: req.body.contato,
            cpfcnpj: req.body.cpfcnpj,
            instituicao: req.body.instituicao,
            ocupacao: req.body.ocupacao,
            email: req.body.Email,
            senha: req.body.senha
        }).then(()=>{
            res.send('Cadastro realizado com sucesso ;)');
            // res.redirect('/login');
        }).catch(()=>{
            res.send("Erro ao gravar dados :(");
        })*/
    })
    // idlogin: novoLogin.idlogin
    /*app.post('/dep-patente', (req, res)=>{
        //const Cadastro = require("./models/cadastros");
        //database.sync();
        res.redirect('/');
    })
    app.post('/dash-board-nit', (req, res)=>{
        //const Cadastro = require("./models/cadastros");
        //database.sync();
        res.render("dash-board-nit");
    })*/

const PORT = process.env.PORT || 3000    
app.listen(PORT, ()=>{
    console.log("Servidor rodando na port: " + PORT);
});