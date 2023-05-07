import Project from "../models/Project.js";

export const getAllProject = async (req, res) => {
  const data = await Project.find();

  return res.status(200).json(data);
};

export const getWebProjects = async (req, res) => {
  const data = await Project.find({ category: "web" });
  const newData = data.map((element) => {
    return {
      id: element.id,
      name: element.name,
    };
  });

  return res.status(200).json(data);
};
