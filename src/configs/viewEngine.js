const express = require('express');
const configViewEngine =(app )=>{
    app.use(express.static("./src/public"))// contain img css
    app.set("view engine","ejs");//write if else
    app.set("views","./src/views");// write file ejs in views

}
module.exports= configViewEngine;