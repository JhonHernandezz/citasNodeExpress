import dotenv from 'dotenv';
import { Router } from 'express';
import mysql from 'mysql2';

let storageTipoDocumento = Router();
dotenv.config();

let con = undefined;

storageTipoDocumento.use((req, res, next) => {
    let connect = JSON.parse(process.env.MY_CONNECT)
    con = mysql.createPool(connect);
    next();
})

/* http://127.10.10.10:5010/tipo_documento/ */
storageTipoDocumento.get("/", (req, res)=>{
    con.query(
    /*sql*/`SELECT * FROM tipo_documento`,
    (err, data, fil) => {
        res.send(JSON.stringify(data))
    }) 
})

export default storageTipoDocumento;