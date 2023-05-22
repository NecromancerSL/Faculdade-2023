import { Request, Response } from 'express';
import { User } from '../models/User';
import express from 'express';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const addIdade = async (req: Request, res: Response ) => {
    let id : string = req.params.id;

    let results = await User.findAll({ where: {id} });
    if(results.length > 0){
        let usuario = results[0];
        usuario.age++;
        await usuario.save();
    }
    res.redirect('/');
}

export const diminuirIdade = async (req: Request, res: Response ) => {
    let id : string = req.params.id;

    let results = await User.findAll({ where: {id} });
    if(results.length > 0){
        let usuario = results[0];
        usuario.age--;
        await usuario.save();
    }
    res.redirect('/');
}

export const excluir = async (req: Request, res: Response ) => {
    let id : string = req.params.id;
    await User.destroy({ where: {id} });
    res.redirect('/');
}

export const novousuario = async (req: Request, res: Response) => {
  const { name, age } = req.body; // obtenhem os valores do formulário
  try {
    // cria um novo usuário com os valores fornecidos
    const newUser = await User.create({ name, age });
    res.status(201).redirect('/'); // retorne o novo usuário como resposta
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao inserir usuário');
  }
};

