import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//configurações das variáveis de ambiente
dotenv.config();

const app = express();

//Template engine
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

//public assets
app.use(express.static(path.join(__dirname, '../public')));

//Rotas
app.use(mainRoutes);

app.use('/', (req,res)=>{
    res.send('Página não encontrada');
})

//
app.listen(process.env.PORT);