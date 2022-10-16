import express, {Request, Response} from 'express';
import dotenv from 'dotenv'
import path from 'path'
import mustache from 'mustache-express';
import Routes from './Routes';

dotenv.config();

const PORT = process.env.PORT;

const server = express()
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({ extended: true }));
server.use(Routes)


server.listen(PORT)