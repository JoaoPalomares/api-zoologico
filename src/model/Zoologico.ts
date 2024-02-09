import { Atracao } from "./Atracao";

export class Zoologico {
    /**
     * Representa o nome do zoológico.
     */
    private nome: string;
    /**
     * Representa a lista de atrações do zoológico.
     */
    private lista_de_atracoes: Array<Atracao>;

    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome O nome do zoológico.
     * @param _lista_de_atracoes A lista de atrações do zoológico.
     */
    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        this.nome = _nome;
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    /**
     * Retorna o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do zoológico.
     * 
     * @param _nome O nome a ser atribuído ao zoológico.
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getListaDeAtracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }

    /**
     * Define a lista de atrações do zoológico.
     * 
     * @param _lista_de_atracoes A lista de atrações a ser atribuída ao zoológico.
     */
    public setListaDeAtracoes(_lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = _lista_de_atracoes;
    }
}