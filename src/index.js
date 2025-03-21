// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express";
const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("App not able to connect with DB", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port: ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("error: ", error);
//   }
// })();  







                          
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000),
      () => {
        console.log(`Server is running on port : ${process.env.PORT}`);
      };
  })
  .catch((error) => {
    console.log("MongoDB connection Failed", error);
  });
