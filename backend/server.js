'use strict';

// const { application } = require('express');
const express = require('express');
const morgan = require('morgan');

const {
  getAllItems,
  getItem,
  addItem,
  updateItem,
} = require("./ItemHandlers.js");

const {
    createCart,
    getCartItems,
    getCartItem,
    addItemCart,
    updateItemCart,
    deleteItemCart,
    deleteCart,
    getTotalCartCost,
} = require("./ItemCartHandler.js")

const {
  getAllCompanies,
  getCompany,
} = require("./CompanyHandler.js")

const PORT = 4000;
const app = express();

app.use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  app.use(morgan('tiny'));
  app.use(express.static('./server/assets'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/', express.static(__dirname + '/'));

  //*****************************
  // Endpoints for CART/PURCHASES
  //*****************************

  //GET all cart items
  app.get("/api/get-cart-items", getCartItems);

  //POST to add One Item To A Cart
  app.post("/api/add-cart-item", addItemCart);

  //POST Create A Cart
  app.post("/api/add-cart-item", createCart);

  //GET Returns A Specific Item In A Cart By Id
  app.get("/api/get-item-cart", getCartItem)

  //PATCH to update an Item In A Cart
  app.patch("/api/update-cart-item", updateItemCart);

  //DELETE an item from a cart by id
  app.delete("/api/delete-cart-item", deleteItemCart);

  //DELETE cart by ID
  app.delete("/api/delete-cart-item", deleteCart);

  //GET total cost of items
  app.get("/api/get-total", getTotalCartCost);

  //******************************
  // Endpoints for INVENTORY ITEMS
  //******************************

  //GET all items
  app.get("/api/get-items", getAllItems);

  //GET specific item
  app.get("/api/get-item", getItem);

  //POST an item (STRETCH)
  app.post("/api/add-item", addItem);

  //PATCH to update stock, etc...
  app.patch("/api/update-item", updateItem);

  //************************
  // Endpoints for COMPANIES
  //************************

  //GET all companies
  app.get("/api/get-all-companies", getAllCompanies);

  //GET specific company
  app.get("/api/get-company/:companyId", getCompany);


  // Catch all
  app.get('*', (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is not what you're looking for.",
    });
  });

  

  app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
