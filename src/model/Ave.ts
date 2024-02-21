import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Representa uma ave, um tipo de animal vertebrado que possui penas, asas e põe ovos.
 */
export class Ave extends Animal{
    /**
     * Representa a envergadura da ave.
     */
    private envergadura: number;
    
    /**
    * Construtor da classe Ave, que herda características de uma classe pai (superclasse).
    * 
    * @param _envergadura A envergadura da ave, que é uma característica específica das aves.
    * @param _nome O nome da ave, uma informação básica sobre a ave.
    * @param _idade A idade da ave, que pode ser relevante em contextos diversos.
    * @param _genero O gênero da ave, como "macho", "fêmea" ou "indeterminado".
    */
    constructor(_nome: string, _idade: number, _genero: string, _envergadura: number){
        // Chama o construtor da superclasse (classe pai), que é a classe da qual Ave herda propriedades e métodos.
        super(_nome, _idade, _genero);
        // Atribui a envergadura fornecida ao atributo 'envergadura' específico da classe Ave.
        this.envergadura = _envergadura;
    }

    /**
     * Retorna a envergadura do animal
     * 
     * @returns envergadura : envergadura do animal
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Atribui o parâmetro ao atributo envergadura
     * 
     * @param _envergadura : envergadura do animal
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }

    static async listarAves() {
        const listaDeAves: Array<Ave> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  ave`);
            queryReturn.rows.forEach(ave => {
                listaDeAves.push(ave);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeAves);

            return listaDeAves;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarAve(ave: Ave): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO ave (nome, idade, genero, envergadura)
                VALUES
                ('${ave.getNome().toUpperCase()}', ${ave.getIdade()}, '${ave.getGenero().toUpperCase()}', '${ave.getEnvergadura()}');
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