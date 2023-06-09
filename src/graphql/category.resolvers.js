const CategoryService = require("./../services/category.service");
const checkRoleGql = require("./../utils/check-rolesGQL");
const checkJwtGql = require("./../utils/checkJWT-GQL");

const service = new CategoryService();

const allCategories= async()=>{
  const categories = await service.find();
  return categories
}
const addCategory = async (root, {dto},context)=>{
  const user = await checkJwtGql(context) //validate jtw
  checkRoleGql(user,'admin') ; // validate Role
  const newCategory = await service.create({...dto, image: dto.image.href});
  return newCategory;
}
const categoryById = async (root, args)=>{
  console.log(args)
  const category = await service.findOne(args.id);
  return category
}

const getCategory = (_,{id})=>{
    return service.findOne(id);
}

module.exports= {allCategories, categoryById, addCategory, getCategory}