import { Animal } from "./Animal";

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
    constructor(_raca: string, _nome: string, _idade: number, _genero: string){
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
}