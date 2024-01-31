import { Animal } from "./Animal";

class Ave extends Animal{
    private envergadura: number;
    
    constructor(_envergadura: number, _nome: string, _idade: number, _genero: string){
        super(_nome, _idade, _genero);
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