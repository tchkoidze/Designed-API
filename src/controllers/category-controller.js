import Category from "../models/category.js";

export const getAllCategories = async (req, res) => {
  const data = await Category.find();

  return res.status(200).json(data);
};
