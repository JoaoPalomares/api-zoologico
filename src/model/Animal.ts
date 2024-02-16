/**
 * Representa um animal no zoológico, podendo ser um mamífero, ave, réptil ou de outra classe relacionada.
 */
export class Animal {
    /**
     * Representa o nome do animal.
     */
    private nome: string;
    /**
     * Representa a idade do animal.
     */
    private idade: number;
    /**
     * Representa o gênero do animal.
     */
    private genero: string;

    /**
    * Construtor da classe Animal.
    * 
    * @param _nome O nome do animal.
    * @param _idade A idade do animal.
    * @param _genero O gênero do animal.
    */
    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Retorna o nome do animal
     * 
     * @returns nome : nome do animal
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _nome : nome do animal
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a idade do animal
     * 
     * @returns idade : idade do animal
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Atribui o parâmetro ao atributo idade
     * 
     * @param _idade : idade do animal
     */
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }

    /**
     * Retorna o gênero do animal
     * 
     * @returns genero : gênero do animal
     */
    public getGenero(): string {
        return this.genero;
    }

    /**
     * Atribui o parâmetro ao atributo genero
     * 
     * @param _genero : gênero do animal
     */
    public setGenero(_genero: string): void {
        this.genero = _genero;
    }
}