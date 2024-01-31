import express from 'express';
import cors from 'cors';

const port = 3000;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.json('Olá Mundo!!');
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
});