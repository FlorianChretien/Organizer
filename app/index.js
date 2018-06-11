import * as bodyParser from 'body-parser'
import Express from 'express'
/*import { Sequelize } from './lib/db'
import { Utilisateur } from 'models'*/

const app = Express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.send('hello world');
});