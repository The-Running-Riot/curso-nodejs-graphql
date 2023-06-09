const boom = require('@hapi/boom')
const checkRoleGql =(user,...roles)=>{
  if(!roles.includes(user.role)){
    throw boom.unauthorized('role is not valid for this request')
  }
  return user
}
module.exports = checkRoleGql