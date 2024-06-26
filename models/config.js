
import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const PORTSQL = process.env.PORTSQL;
const USERSQL= process.env.USERSQL;
const PASSWORDSQL= process.env.PASSWORDSQL; 
const HOSTSQL = process.env.HOSTSQL;
const DATASQL = process.env.DATASQL;


//prueba de lectura de variables de entorno

console.log('==============');

console.log(PORTSQL);
console.log(USERSQL);
console.log(PASSWORDSQL);
console.log(HOSTSQL);
console.log(DATASQL); 

console.log('==============');

//Conexión a la base de datos
const connection = mysql.createConnection({
    port: PORTSQL,
    host: HOSTSQL,
    user:USERSQL,
    password: PASSWORDSQL,
    database: DATASQL,
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Conexión exitosa a la base de datos: ${DATASQL}`);
});


export default connection;







