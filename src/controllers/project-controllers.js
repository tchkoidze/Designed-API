import Project from "../models/Project.js";

export const getAllProject = async (req, res) => {
  const data = await Project.find();

  return res.status(200).json(data);
};

export const getWebProjects = async (req, res) => {
  const data = await Project.find({ category: "web" });
  const newData = data.map((element) => {
    return {
      image: element.image,
      title: element.title,
      description: element.description,
      category: element.category,
    };
  });

  return res.status(200).json(newData);
};
