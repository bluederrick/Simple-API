const yup = require ('yup');
//const {genSalt} = require ('bcrypt');
const bcrpyt = require ('bcryptjs');
const salt = bcrpyt.genSalt(10);
const uuid = require ('uuid');
const usermodel = require ('../models/schema')




const createUser =  async (req, res) => {
    const validationSchema = yup.object().shape({
        firstname: yup.string().required('Firstname is mandatory'),
        lastname: yup.string().required('Lastname is mandatory'),
        email: yup.string().email().required('Email is mandatory'),
        password: yup.string().min(6).max(12).required('Password is mandatory')
    })


     
    const { firstname, lastname, email, password , id} = req.body

   validationSchema.validate({firstname, lastname, email, password , id}).catch((error)=>{
return res.status(422).json(error)
   })
        

   const hashpassword =await bcrpyt.hashSync(password , salt);


   const checkEmail = await usermodel.count({email:email})

   if(checkEmail > 0){
    return res.status(422).json(Error)
   }


   const comparePassword  = bcrypt.compareSync(password, user.password);
    
    const user = usermodel.of ({id:uuid.v4 ,email , password:hashpassword ,lastname ,firstname})

    user.save()
        
}

const loginUser = async (req, res) => {
    const validationSchema = await yup.object().shape({
        email: yup.string().email().required('Email is mandatory'),
        password: yup.string().min(6).required('Password is mandatory')
         })}
    

module.exports={
    loginUser , createUser
}