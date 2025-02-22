import express from 'express';
import {PORT} from './config/env.js';
import { testConnection,database } from './config/database.js';
import router from "./routes/route.js";



const app =express ();
 testConnection();

 database.sync({sync:true})
 .then (() => console.log("tabelas sincronizadas com sucesso!"))
 .catch ((error) => console.log("Erro ao sincronizar tabelas"));

 app.use (express.json());
 app.use ("api",router);

 app.listen (PORT,()=>{
console.log(`Servidor rodando na porta ${PORT}`);
 });

 