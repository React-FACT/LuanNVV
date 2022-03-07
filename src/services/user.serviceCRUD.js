const { createConnectDB } = require('../configs/connectDB');
const mysql = require('mysql');
let getAllUser = (id) => {
  return new Promise((resolve, reject) => {
    if (id == "ALL") {
      let sql = "SELECT * FROM luandb.user;";
      createConnectDB().query(sql, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    } else {
      let sql = "SELECT * FROM luandb.user where u_id = " + mysql.escape(id);
      createConnectDB().query(sql, (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results);
      });
    }
  });
};

let addUser = (body) => {
  return new Promise((resolve, reject) => {
    // let sql="INSERT INTO `luandb`.`user` (`u_first_name`, `u_last_name`, `u_email`, `u_password`, `u_phone`, `u_gender`, `u_birthdate`, `u_fLdate`, `u_lLDate`, `u_option`, `u_note`)  VALUES ('tran van ', 'anhanah', 'name@gmail.com', '12345', '20394820', '1', '2000/1/4', '2022/3/4', '2022/4/4', 'fresher', 'fresher');"
    let sql = "INSERT INTO `luandb`.`user` (`u_first_name`, `u_last_name`, `u_email`, `u_password`, `u_phone`, `u_gender`, `u_birthdate`, `u_fLdate`, `u_lLDate`, `u_option`, `u_note`) "
      + ` VALUES( '${body.firstName}', '${body.lastName}', '${body.email}', '${body.password}', '${body.phone}', '${body.gender}', '${body.birthdate}',' ${body.fLdate}', '${body.lLdate}', '${body.option}', '${body.note}');`
    createConnectDB().query(sql, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve({
        error: 0,
        message: "success"
      })
    });
  })
}

let deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    let sql = "DELETE FROM user where u_id =" + mysql.escape(id);
    createConnectDB().query(sql, (err, results) => {
      if (err) throw reject(err);
      resolve({
        error: 0,
        message: "success"
      })

    });
  })
}
let UpdateUser = (body) => {
  return new Promise((resolve, reject) => {
    console.log(body);
    let sql = `UPDATE user SET u_first_name ='${body.firstName}', u_last_name='${body.lastName}' , u_email ='${body.email}' , u_password ='${body.password}' , u_phone ='${body.phone}',u_gender='${body.gender}' WHERE u_id ='${body.id}' ;`
    createConnectDB().query(sql, (error, results) => {
      if (error) {
        reject(error);
      }
      resolve({
        error: 0,
        message: "success"
      })
    });
  })
}
module.exports = {
  getAllUser: getAllUser,
  addUser: addUser,
  deleteUser: deleteUser,
  UpdateUser: UpdateUser
}