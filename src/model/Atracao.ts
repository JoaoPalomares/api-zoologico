import { Habitat } from "./Habitat";

export class Atracao {
    /**
     * Representa o nome da atração.
     */
    private nome: string;
    /**
     * Representa a lista de habitats associados à atração.
     */
    private lista_de_habitats: Array<Habitat>;

    /**
    * Construtor da classe Atracao.
    * 
    * @param _nome O nome da atração.
    * @param _lista_de_habitats A lista de habitats associada à atração.
    */
    constructor(_nome: string, _lista_de_habitats: Array<Habitat>) {
        this.nome = _nome;
        this.lista_de_habitats = _lista_de_habitats;
    }

    /**
    * Retorna o nome da atração.
    * 
    * @returns O nome da atração.
    */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome da atração.
     * 
     * @param _nome O nome a ser atribuído à atração.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a lista de habitats associada à atração.
     * 
     * @returns A lista de habitats da atração.
     */
    public getListaDeHabitats(): Array<Habitat> {
        return this.lista_de_habitats;
    }

    /**
     * Define a lista de habitats associada à atração.
     * 
     * @param _lista_de_habitats A lista de habitats a ser atribuída à atração.
     */
    public setListaDeHabitats(_lista_de_habitats: Array<Habitat>): void {
        this.lista_de_habitats = _lista_de_habitats;
    }
}