import { Animal } from "./Animal";

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
    constructor(_envergadura: number, _nome: string, _idade: number, _genero: string){
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
}