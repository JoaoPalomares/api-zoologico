import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Representa um mamífero, um tipo de animal de sangue quente que geralmente dá à luz a filhotes vivos
 * e alimenta seus filhotes com leite produzido por glândulas mamárias.
 */
export class Mamifero extends Animal{
    /**
     * Representa a raça do mamífero.
     */
    private raca: string;

    /**
     * Construtor da classe Mamifero.
     * 
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_nome: string, _idade: number, _genero: string, _raca: string,){
        // Chama o construtor da superclasse (classe pai), que é a classe da qual Mamifero herda propriedades e métodos.
        super(_nome, _idade, _genero);
        // Atribui a raça fornecida ao atributo 'raca' específico da classe Mamifero.
        this.raca = _raca;
    }

    /**
     * Retorna a raça do animal
     * 
     * @returns raça : raça do animal
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Atribui o parâmetro ao atributo raça
     * 
     * @param _raca : raça do animal
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }

    static async listarMamiferos() {
        const listaDeMamiferos: Array<Mamifero> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  mamifero`);
            queryReturn.rows.forEach(mamifero => {
                listaDeMamiferos.push(mamifero);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeMamiferos);

            return listaDeMamiferos;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarMamifero(mamifero: Mamifero): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
                VALUES
                ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getRaca().toUpperCase()}');
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            return insertResult;
        } catch(error) {
            return error;
        }
    }
}