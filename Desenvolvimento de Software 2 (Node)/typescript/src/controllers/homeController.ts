import {Request,Response} from 'express';
import {animal} from '../models/Animal';
export const home =(req:Request ,res:Response) =>{
    let idade:number = 90;
    let exibe:boolean = false;
    if(idade > 50){
      exibe = true;
    }
    let lista=animal.getAll();
    let listaPeixe=animal.getPeixes('fish');

    res.render('home',{
        nome:"Gustavo",
        exibe,
        animals:lista,
        animalPeixe:listaPeixe,
    }
    )
  };

export const contato = (req:Request ,res:Response) =>{
    res.render('contato');
};

export const sobre = (req:Request ,res:Response) =>{
    res.render('sobre');
};  