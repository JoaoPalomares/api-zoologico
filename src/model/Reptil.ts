import { Animal } from "./Animal";

class Reptil extends Animal{
    private tipo_de_escamas: string;

    constructor(_tipo_de_escamas: string, _nome: string, _idade: number, _genero: string){
        super(_nome, _idade, _genero);
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
}