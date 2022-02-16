const express = require("express");
const cors = require('cors');
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const { Pool } = require('pg');
require('dotenv').config();
// CONECTANDO AO BANCO DE DADOS
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
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
    app.use(cors());
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
    app.post('/cad', async(req, res)=>{// cadastro de usuario
        const {nome, endereco, contato, cpfcnpj, instituicao, ocupacao, email, senha} = req.body
        const {rows} = await pool.query("SELECT encode(digest($1, 'sha1'), 'hex')", [senha]);
        try {
            const novoCadastro = await pool.query('INSERT INTO cadastro(nome,endereco,contato,cpfcnpj,instituicao,ocupacao,email,senha)VALUES($1,$2,$3,$4,$5,$6,$7, $8) RETURNING *', [nome, endereco, contato, cpfcnpj,instituicao, ocupacao, email, [rows[0].encode].toString()]);
            // return res.status(200).redirect('/login');
            res.render('/login');
        } catch (error) {
            return res.status(400).send(error);
        }
    });

    /*app.post('/cad', async (req, res)=>{// cadastro de usuario
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

const PORT = process.env.PORT || 8080    
app.listen(PORT, ()=>{
    console.log("Servidor rodando na port: " + PORT);
});