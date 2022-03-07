
const {appRouter}= require("../routers/app.routing");



const registerRouter = (app)=>{
    app.use('/',appRouter)
}

module.exports ={registerRouter}