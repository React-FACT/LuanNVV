// connect db voi mysql
const mysql = require('mysql8');
const createConnectDB = ()=>{
  const connection =   mysql.createConnection({
        host: 'localhost',
        database:'luandb',
        port: 3306,
        user: 'root',
        password: 'root',
    });
    
    connection.connect(error => {
        if (error) { console.log(error); }
        else {
            console.log("Successfully connected to the database.");
        }
    });
    return connection;
    
}




module.exports = {createConnectDB} ;

// connect db with sequelize
// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("luandb", "root", null, {
//   host: "localhost",
//   dialect: "mysql",
// });

// //check connect db
// let connectDB = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// module.exports = connectDB;