import express from 'express';
import morgan from 'morgan';
import bodyparser from 'body-parser';
import router from './server/route/index';


let app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', router);


app.get('/', (req, res) => res.status(200).send({ message: 'YAY!  Welcom to Teamwork !! Here to serve you fill free ' }));
app.all('*', (req, res) => res.status(404).send({ status: 404, error: 'Route not found' }));
app.listen(PORT, () => {
    console.log(`Teamwork server has been started on port:${PORT}`);
});