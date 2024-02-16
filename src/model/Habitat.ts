import { Animal } from "./Animal";

/**
 * Representa um habitat no zoológico, onde os animais vivem. 
 */
export class Habitat {
    /**
     * Representa o nome do habitat.
     */
    private nome: string;
    /**
     * Representa a lista de animais presentes no habitat.
     */
    private lista_de_animais: Array<Animal>;

    /**
     * Construtor da classe Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _lista_de_animais A lista de animais presentes no habitat.
     */
    constructor(_nome: string, _lista_de_animais: Array<Animal>) {
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }

    /**
     * Retorna o nome do habitat
     * 
     * @returns nome : nome do habitat
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Atribui o parâmetro ao atributo habitat
     * 
     * @param _nome : nome do habitat
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a lista de animais
     * 
     * @returns lista_de_animais : lista de animais
     */
    public getListaDeAnimais(): Array<Animal> {
        return this.lista_de_animais;
    }

    /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _lista_de_animais : lista de animais
     */
    public setListaDeAnimais(_lista_de_animais: Array<Animal>): void {
        this.lista_de_animais = _lista_de_animais;
    }
}