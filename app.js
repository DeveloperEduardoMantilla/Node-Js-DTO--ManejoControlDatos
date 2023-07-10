import 'reflect-metadata';
import { plainToClass } from 'class-transformer';   
//Aca se importa la clase transpilada
import {user} from "./controller/user.js";

let json ={
    id: 1005124569,
    nombre: "Edgar Eduardo",
    edad:22
}

let data = plainToClass(user, json, {excludeExtraneousValues: true});
console.log(data.nombreId);