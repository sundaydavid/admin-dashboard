import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoute from "./routes/sales.js";

import { db } from "./config/config.js";

// import User from "./models/user.js";
// import Product from "./models/Products.js";
// import Product from "./models/products.js";
// import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js"
// import AffiliateStat from "./models/AffiliateStat.js";
// import {
//   dataUser,
//   dataProductStat,
//   dataProduct,
//   dataTransaction,
//   dataOverallStat,
//   dataAffiliateStat
// } from "./data/index.js";

/*CONFIGURATION*/
dotenv.config();
const app = express();

/*MIDDLEWARE*/
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES*/
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoute);

/*CONNECT DATABASE*/
db();

/*PORT*/
const PORT = process.env.PORT || 9000;

/*CREAT SERVER*/
app.listen(PORT, () => console.log(`Server run on port: ${PORT}`));

/*ONLY ADD DATA ONCE*/
// User.insertMany(dataUser)
// Product.insertMany(dataProduct);
// ProductStat.insertMany(dataProductStat);
// Transaction.insertMany(dataTransaction);
// OverallStat.insertMany(dataOverallStat)
// AffiliateStat.insertMany(dataAffiliateStat)
