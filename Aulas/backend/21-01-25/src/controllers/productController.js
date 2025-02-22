import {
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById,
    getProduct,
  } from "../repositories/productRepositoy.js";
  
  export const getAllProductsHandler = async (req, res) => {
    try {
      const products = await getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  };
  
  export const getProductHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await getProduct(id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  };
  
  export const createProductHandler = async (req, res) => {
    try {
      const productData = req.body;
      const newProduct = await createProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  };
  
  export const updateProductHandler = async (req, res) => {
    try {
      const { id } = req.params;
      const productData = req.body;
      await updateProductById(id, productData);
      res.json({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  };
  
  export const deleteProductHandler = async (req, res) => {
    try {
      const { id } = req.params;
      await deleteProductById(id);
      res.json({ message: "Produto deletado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar produto" });
    }
  };
  