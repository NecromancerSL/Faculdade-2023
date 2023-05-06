import { Request, Response } from 'express';
import { Op } from 'sequelize';

import {sequelize} from '../instances/mysql';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    let users = await User.findAll({
        //para trazer alguns atributos da tabela
        //attributes: ['name', 'age']
        //para buscar coisas especificas
        //where: {id: 3}
        //where: {age: 30, name: 'Paulo'}
        where: {
            //op.or vai fazer para mostrar um ou o outro, oq for verdadeiro
            [Op.or]: [
                { age: 55 },
                { age: 30 },
                { name: 'Gustavo' },
                { name: 'Cristian' }
            ]
        }
        //comandos do op
        //[Op.gt]: 40, > 40
        //[Op.gte]: 40, >= 40
        //[Op.lt]: 40, < 40
        //[Op.lte]: 40, <= 40
        //[Op.between]: [40,70] tras numeros entre 40-70
        //[Op.in]: [30,50] mostra um ou outro, se tiver os dois mostra os dois,
        //[Op.like]: 'pa%' mostra caso tenha as letras
    });


    //faz a conexao com o banco
    try{
        await sequelize.authenticate();
        console.log("Conexão estabelicida com sucesso");
    }catch(error){
        console.log("Deu problema: ",error)
    }


    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Gustavo ',
        lastName: 'Nunes',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};