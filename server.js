const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require("./config/db");

//Load env vars
dotenv.config({ path: "./config/config.env" });

//Connect to Database
connectDB();
// Route files
const products = require("./routes/products");
const popularProducts = require("./routes/popularProducts");
const productDetail = require("./routes/productDetail");
const popularProductDetail = require("./routes/popularProductDetail");
const app = express();

// Body parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// Mount routers
app.use("/api/v1/products", products);
app.use("/api/v1/popularproducts", popularProducts);
app.use("/api/v1/productdetail", productDetail);
app.use("/api/v1/popularproductdetail",  popularProductDetail);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`.magenta.bold
  )
);

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise)=>{
    console.log( `Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});
