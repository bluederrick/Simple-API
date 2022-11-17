const mongoose = require ('./database_connnect.js');
const { user } = require('../controllers/users_route');
const users_route = require ('../controllers/user_validate.js')

const {Schema} = mongoose

const user_schema = new Schema( 
    {
        _id: {type: String},
        firstname: { 
            type: String, 
            required: 'Firstname is mandatory'
    },
        lastname: {
            type: String, 
            required: "Lastname is mandatory"
    },
        email: {
            type: String, unique: true,
             required: "Email is mandatory"
            },
        password: {
            type: String, 
            required: "Password is mandatory"
        },

        date :{
             type :Date ,default :Date.now
        }
        
    
    }
)





//user_schema.static.of = (data) = new user (data)


const schema = mongoose.model("user" , user_schema )


module.exports=schema