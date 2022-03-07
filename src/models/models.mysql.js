const {createConnectDB} = require('../configs/connectDB')
const mysql = require('mysql8');
let data = [ ];
module.exports = class User{
    constructor(){

    }
    static fetAlluser() {
        let sql = 'SELECT * FROM luandb.user;';
        createConnectDB().query(sql, (error, results) => {
            if (error) throw error;
            console.log(results);
            data = results
        })
        return data;
    }
    static  fetOneuser(user){
        let sql = 'SELECT * FROM luandb.user where u_id = ' + mysql.escape(user);
         createConnectDB().query(sql, (error, results) => {
              if (error) throw error;
              console.log(results);
              data = results
          })
  return data;
    }
}


// let fetAlluser =async () => {
//         let sql = 'SELECT * FROM luandb.user;';
//       await  createConnectDB().query(sql, (error, results) => {
//             if (error) throw error;
//             console.log(results);
//             data = results
//         })
// return data
    //  const connection = mysql.createConnection({
    //     host: 'localhost',
    //     database: 'luandb',
    //     port: 3306,
    //     user: 'root',
    //     password: 'root',
    // });

    // connection.connect((error) => {
    //     if (error) { console.log(error); }
    //     else {
    //         console.log("Successfully connected to the database.???????????");
    //         let sql = 'SELECT * FROM luandb.user;';
    //         connection.query(sql, (error, results) => {
    //             if (error) throw error;
    //             console.log(results);
    //             return results;
    //         });
    //         connection.end();
    //     }
    // });
// }






