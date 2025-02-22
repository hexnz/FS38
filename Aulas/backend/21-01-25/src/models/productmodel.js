import { DataTypes } from "sequelize";
import { database } from "../config/database.js";



export const Product =database.define("Products",{

    id: {
        type :DataTypes.INTEGER,
        allowNull :false,
        autoIncrement:true,
        primaryKey :true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price: {
        type :DataTypes.STRING,
        allowNull:null,

    },
    description: {
        type :DataTypes.TEXT,
        allowNull:true,

    },
    sizes: {
        type:DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull:false,
        }
    });






