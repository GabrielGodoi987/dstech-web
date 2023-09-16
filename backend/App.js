//                                   #importações       

// framework principal do projeto
const express = require('express');
//usado para fazer as requisições teste com o insomnia
const bodyParser = require('body-parser');

//usado para receber/enviar requisições de rotas diferentes em que o projeto está sendo executado
const cors = require('cors')

//importando rotas
const MessageRouter = require("./routes/MessageRouter");
const ListUser = require("./routes/ListUsersRouter")

//                                   #Utilizações

//criamos a instancia para usá-lo
const app = express();
//Para termos respostas em formato json no insomina e testes de requisições
app.use(express.json());
//usamos o body-parser para responder json ao usarmos o insomnia
app.use(bodyParser.json());
//usamos a instancia do cors para que possamos enviar e receber os dados do front end e do backend
app.use(cors())

app.post('/usersmessage', MessageRouter.router)


app.get('/ListData', ListUser.router)


app.listen(3085, () => {
    console.log('your server is online');
})

