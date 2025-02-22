import { Sequelize } from "sequelize";
import { DB_NAME,DB_USER,DB_PASSWORD,DB_HOST,DB_PORT } from "./env.js";

export const database = new Sequelize (DB_NAME,DB_USER,DB_PASSWORD,{

host :DB_HOST,
dialect :'postgres',
port:DB_PORT,
logging:false,


});
export const testConnection = async () =>{

    try{
        await database.authenticate();
        console.log("Conexao com banco bem sucedida na porta",+DB_PORT);
    }
    catch (error){
        console.log("Erro ao Conectar"+ error);
    }
  
};