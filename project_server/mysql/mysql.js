import mysql from 'mysql2';
import MybatisMapper from 'mybatis-mapper';
require('dotenv').config();
import path from 'path';
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'cart',
    password: 'root',
    port: 8889,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const MapperPath = process.env.MYBATIS_PATH;

MybatisMapper.createMapper([path.join(__dirname, '../mappers/testMapper.xml')]);


const format = {
    language: 'sql',
    indent : ''
};
// connection.connect((err) => {
//     if(err)
//         console.log(err);
    
// });

connection.getConnection(function(err,connection){
    if(!err){
      //connected!
    }
  
    //connection.release();
  });

  setInterval( () => {
    connection.query('SELECT NOW()', (error, rows) => {
        if(error){
            console.log(error);
        }
    });
  }, 15000);

export { connection, MybatisMapper, format, MapperPath };
