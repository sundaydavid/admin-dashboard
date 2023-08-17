import mongoose from "mongoose";

export const db = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connected"))
    .catch((error) => console.log("DB Connection error " + error));
};
