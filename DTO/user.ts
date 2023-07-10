import {Expose, Type, Transform} from "class-transformer";

export class user{
    @Expose({name: "id"})
    @Transform(({value})=>parseInt(value), {toClassOnly: true})
    ID:number;
    @Expose({name: "nombre"})
    @Type(() => String)
    nom_com: string; 
    @Expose({name: "edad"})
    @Transform(({value})=>parseInt(value), {toClassOnly: true})
    eda: number;

    constructor(ID: number, NOMBRE: string, eda: number){
        this.ID = ID;
        this.nom_com = NOMBRE;
        this.eda = eda;
    }

    get nombreId(): string{
        return `${this.ID} - ${this.nom_com}`;
    }
}