import { Product } from "../models/productModel.js";


export const getAllProducts = async () => {
  return await Product.findAll();
};

export const getProduct = async (productId) => {
  return await Product.findOne({ where: { id: Number(productId) } });
};

export const createProduct = async (productData) => {
  return await Product.create(productData);
};

export const updateProductById = async (id, productData) => {
  return await Product.update(productData, { where: { id } });
};

export const deleteProductById = async (id) => {
  return await Product.destroy({ where: { id } });
};