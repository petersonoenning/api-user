import {Request, Response} from 'express';
import { isValidateObjectRequest } from './validate';
import { loadUsuarios, saveUsuarios } from './load-data';


export class usuarioController{
    //FUNCAO PARA LISTAR 
public list(request:Request, response:Response){
    const usuarios = loadUsuarios();
    response.status(200).json(usuarios);
}

//CRIA O USUÁRIO E SALVA OS DADOS EM ARQUIVOS
public create(request:Request, response:Response){
let ok = true;
let status =201;
let mensagem = "Usuário salvo com sucesso¹";

const inputs = [
{
    name: 'nome',
    message: 'A propriedade [nome] não pode estar vazia'
},
{
    name: 'email',
    message: 'A propriedade [email] não pode estar vazia'
},
{
    name: 'nomeUsuario',
    message: 'A propriedade [nome de usuario] não pode estar vazia'
}
];

//VERIFICA SE ESTÁ VAZIO OU NAO 
const checkvalidate = isValidateObjectRequest(request, inputs);
 if(Array.isArray(checkvalidate)){
    ok=false;
    status=400;
    mensagem = checkvalidate.join(',');
 }

 if(ok){
    saveUsuarios(request.body);
 }

response.status(status).json({
    sucesso:ok,
    message: mensagem
});
}

//FUNCAO UPDATE

public update (request: Request, response: Response){
    response.status(200).json({mensagem:"Função update"});
}


//FUNCAO DESTROY
public destroy (request: Request, response: Response){
    response.status(200).json({mensagem:"Função destroy"});
}

}

