import express from 'express';
import cors from 'cors';
import { Habitat } from './model/Habitat';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';
import { DatabaseModel } from './model/DatabaseModel';
import { Mamifero } from './model/Mamifero';

const port = 3000;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave("Maria",2.5, "Fêmea" ,1);
    let habitat: Habitat = new Habitat("Selva", [ave]);
    res.json(["A ave é: ", ave, "O habitat é: ", habitat]);
});

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});

server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criada');
});

server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoológico criado');
});

server.get('/reptil', async (req, res) => {
    const repteis = await Reptil.listarRepteis();

    res.status(200).json(repteis);
})

server.post('/new/reptil', async (req, res) => {
    const { nome, idade, genero, tipo_de_escamas } = req.body;

    const novoReptil = new Reptil(nome, idade, genero, tipo_de_escamas);

    const result = await Reptil.cadastrarReptil(novoReptil);

    if(result) {
        return res.status(200).json('Reptil cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o réptil no banco de dados');
    }
})

server.get('/mamifero', async (req, res) => {
    const mamiferos = await Mamifero.listarMamiferos();

    res.status(200).json(mamiferos);
})

server.post('/new/mamifero', async (req, res) => {
    const { nome, idade, genero, raca } = req.body;

    const novoMamifero = new Mamifero(nome, idade, genero, raca);

    const result = await Mamifero.cadastrarMamifero(novoMamifero);

    if(result) {
        return res.status(200).json('Mamífero cadastrado com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar o mamífero no banco de dados');
    }
})

server.get('/ave', async (req, res) => {
    const aves = await Ave.listarAves();

    res.status(200).json(aves);
})

server.post('/new/ave', async (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;

    const novoAve = new Ave(nome, idade, genero, envergadura);

    const result = await Ave.cadastrarAve(novoAve);

    if(result) {
        return res.status(200).json('Ave cadastrada com sucesso');
    } else {
        return res.status(400).json('Não foi possível cadastrar a ave no banco de dados');
    }
})

new DatabaseModel().testeConexao().then((resbd) =>{
    if(resbd){
        server.listen(port, () => {
            console.log(`Servidor está escutando no endereço http://localhost:${port}`);
        });
    } else {
        console.log('Não foi possível conectar ao banco de dados');
    }
});