const ProductsService = require('./../services/product.service');

const service = new ProductsService();

const product= async (_,{id})=>{

    const product = await service.findOne(id);
    return product;
}

const allProducts= async () =>{
    const products = await service.find({});
    return products;
}

const addProduct = async (_, {dto}) =>{
    const newProduct = await service.create(dto);
    return newProduct;
}

const updateProduct = async(_, {id, dto})=>{
    const updateProduct = await service.update(id, dto);
    return updateProduct;
}

const deleteProduct = async (_,{id})=>{
    await service.delete(id);
    return id;
}

const getProductsByCategory = (parent)=>{
    const id = parent.dataValues.id;
    return service.getByCategory(id);
}

module.exports = {allProducts, product, addProduct, deleteProduct, updateProduct, getProductsByCategory}