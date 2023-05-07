import Category from "../models/category.js";

export const getAllCategories = async (req, res) => {
  const data = await Category.find();
  const newData = data.map((element) => {
    return {
      id: element.id,
      name: element.name,
    };
  });

  return res.status(200).json(newdata);
};
