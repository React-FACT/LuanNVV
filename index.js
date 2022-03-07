const express = require('express')
require('dotenv').config();
const port = process.env.PORT ||3000;
const host = process.env.HOST;

const viewEngine = require("./src/configs/viewEngine")
const server = express(); 
const {registerRouter }= require("./src/configs/configRouter")
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
server.use(express.urlencoded({ extended:true}))
// connect database and config viewEngine

viewEngine(server);
//config router
registerRouter(server);

// config option for swagger 
const option = {
  definition:{
    openapi:{
      info:{
        title:"nodejs for API", 
        version:"3.0.0",
      }
    }
  },
  apis:['./src/routers/*.js']
}


const swaggerDocs = swaggerJSDoc(option);
server.use('/api/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
// ============================================
server.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})