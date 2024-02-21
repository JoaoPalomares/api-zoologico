import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Classe representando um réptil, um tipo de animal de sangue frio que geralmente possui escamas, põe ovos
 * e respira através de pulmões.
 */
export class Reptil extends Animal{
    /**
     * Representa o tipo de escamas do réptil.
     */
    private tipo_de_escamas: string;

    /**
     * Construtor da classe Reptil.
     * 
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     */
    constructor(_tipo_de_escamas: string, _nome: string, _idade: number, _genero: string){
        // Chama o construtor da superclasse (classe pai), que é a classe da qual Reptil herda propriedades e métodos.
        super(_nome, _idade, _genero);
        // Atribui o tipo de escamas fornecido ao atributo 'tipo_de_escamas' específico da classe Reptil.
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Retorna o tipo de escamas do animal
     * 
     * @returns tipo_de_escamas : tipos de escamas do animal
     */
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;
    }

    /**
     * Atribui o parâmetro ao atributo tipo_de_escamas
     * 
     * @param _tipo_de_escamas : tipo de escamas do animal
     */
    public setTipoDeEscamas(_tipo_de_escamas: string): void {
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    static async listarRepteis() {
        const listaDeRepteis: Array<Reptil> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM reptil
            WHERE tipo_de_escamas = 'escudos'`);
            queryReturn.rows.forEach(reptil => {
                listaDeRepteis.push(reptil);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeRepteis);

            return listaDeRepteis;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }
}