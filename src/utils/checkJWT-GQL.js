const boom = require('@hapi/boom')
const checkJwtGql =async(context)=>{
  const {user}= await context.authenticate('jwt',
  {session:false});
  // console.log(context.req.headers["authorization"])
 // usamos la estrategia de jwt
  if(!user){
    throw boom.unauthorized('jwt is not valid')
  }
  return user
}
module.exports = checkJwtGql