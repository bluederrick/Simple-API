const mongoose = require ('mongoose');
const winston = require ('winston');
//const url = require ('./database_connnect.js')
if(process.env.node_env = "test") {  mongoose.connect(`${process.env.db_connection}`).catch((err =>{
    winston.error(err)
    }))
}

const open_success = "open"

mongoose.connection.on(open_success , ()=>{
    winston.info(`mongoDB is connected`)
})

module.exports=mongoose

//export default mongoose ;
