const express = require("express");
const teste = require("sequelize");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const { Pool } = require('pg');
const { emptyQuery } = require("pg-protocol/dist/messages");
require('dotenv').config();

// CONECTANDO AO BANCO DE DADOS
const pool = new Pool({
    // connectionString: process.env.POSTGRES_URL
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
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
// Rotas - gets
    app.get('/', function(req, res){// Rota principal
        res.render("home");
    });
    
    app.get('/login', function(req, res){
        res.render("login");
    });
    
    app.get('/cadastro', function(req, res){
        res.render("cadastro");
    });
    
    app.get('/deposito-de-patentes', (req, res)=>{
        res.render('deposito-de-patentes');
    });
     
    app.get('/dash-board-usuario', (req, res)=>{
        res.render('dash-board-usuario');
    });

    app.post('/dash-board-nit', (req, res)=>{
        res.render("dash-board-nit");
    })
// metodos posts
    app.post('/cad', async(req, res)=>{// cadastro de usuario
        const {nome, endereco, contato, cpfcnpj, instituicao, ocupacao, email, senha} = req.body
        // const {rows} = await pool.query("SELECT encode(digest($1, 'sha1'), 'hex')", [senha]);
        try {
            const novoCadastro = await pool.query('INSERT INTO cadastro(nome,endereco,contato,cpfcnpj,instituicao,ocupacao,email,senha)VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [nome, endereco, contato, cpfcnpj,instituicao, ocupacao, email, senha]);//[rows[0].encode].toString()
            return res.status(200).redirect('/login');
            // return res.status(200).send(novoCadastro.rows);
        } catch (error) {
            return res.status(400).send(error);
        }
    });
    
    app.post('/autenticar', async (req, res)=>{// logar autenticar usuario
        const {usuario, senha} = req.body;
        try {
            const Usuario = await pool.query('SELECT * FROM cadastro WHERE email=$1 AND senha=$2', [usuario, senha])
            // enviar dados para o front
            if(Usuario.rows[0]){
                return res.render('deposito-de-patentes', {dados : Usuario.rows[0]});
            }else{
                return res.render('login2');
            }

        } catch (error) {
            //return res.status(400).send(error);
            return res.status(400).redirect('login2');
        }
    });

    app.post('/depositar-patente',async(req, res)=>{
        const {pesquisa, nomePat, tipPat, email} = req.body
        try {
            const idusuario = await pool.query('SELECT iduser FROM cadastro WHERE email=$1', [email]);
            const novaPatente = await pool.query('INSERT INTO depositopatente(nomepatente,tipopatente,tipopesquisa,iduser)VALUES($1,$2,$3,$4) RETURNING *', [pesquisa, nomePat, tipPat, idusuario.rows[0].iduser]);//[rows[0].encode].toString()
            return res.render('dash-board-usuario');
            // return res.status(200).send(novoCadastro.rows);
        } catch (error) {
            return res.status(400).send(error);
        }
    })

const PORT = process.env.PORT || 8080    
app.listen(PORT, ()=>{
    console.log("Servidor rodando na port: " + PORT);
});