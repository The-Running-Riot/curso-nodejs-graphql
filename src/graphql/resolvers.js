const {product, allProducts, addProduct, deleteProduct, updateProduct, getProductsByCategory} = require('./product.resolvers');
const {login} = require('./auth.resolvers')
const {addCategory, getCategory}= require('./category.resolvers')

const { RegularExpression } = require('graphql-scalars');

//creacion de la expresion regular con graphql-scalars como nuevo tipo llamado CategoryNameType
const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

const resolvers = {
    Query: {
      hello: () => 'Hola mundillo',
      getPerson:(_,args)=> `Hello, my name is ${args.name} and I'm ${args.age} years old.`,
      getNumbers: (_,args)=> args.numbers ,
      product,
      allProducts,
      category:getCategory,
    },

    Mutation:{
      login,
      addProduct,
      deleteProduct,
      updateProduct,
      addCategory
    },
    CategoryNameType,
    Category:{
      products:getProductsByCategory
    }
  }

module.exports = resolvers;