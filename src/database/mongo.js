import mongoose from "mongoose";

const connect = () => {
  try {
    const url = process.env.MONGO_URL;
    return mongoose.connect(url);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connect;
