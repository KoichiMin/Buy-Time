'use strict';

// const { application } = require('express');
const express = require('express');
const morgan = require('morgan');

const {
  getAllItems,
  getItem,
  getAllCategories,
  getNumWatchesByCategory,
  getRandomWatches,
  getWatchesByName,
  getNumWatchesByBodyLocation,
  getNumWatchesByPrice,
} = require("./ItemHandlers.js");

const {
    createCart,
    getCartItems,
    getCartItem,
    addItemCart,
    deleteItemCart,
    deleteCart,
    getTotalCartCost,
    checkout,
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


  //POST Create A Cart
  app.post("/api/add-cart", createCart);

  //GET all cart items
  app.get("/api/get-cart-items/:cartId", getCartItems);

  //GET Returns A Specific Item In A Cart By Id
  app.get("/api/get-item-cart/:cartId/:itemId", getCartItem);

  //POST to add One Item To A Cart
  app.post("/api/add-cart-item", addItemCart);

  //DELETE an item from a cart by id
  app.delete("/api/delete-cart-item/:cartId/:itemId", deleteItemCart);

  //DELETE cart by ID
  app.delete("/api/delete-cart/:cartId", deleteCart);

  //GET total cost of items
  app.get("/api/get-total/:cartId", getTotalCartCost);

  //PATCH checks out a cart
  app.patch("/api/checkout", checkout);

  //******************************
  // Endpoints for INVENTORY ITEMS
  //******************************

  //GET all items
  app.get("/api/get-items", getAllItems);

  //GET specific item
  app.get("/api/get-item/:itemId", getItem);

  //Get all categories
  app.get("/api/categories", getAllCategories);

  //GET watches per page per categories
  app.get("/api/getWatchesByCategory/:numWatchesPerPage/:category", getNumWatchesByCategory);

  //GET random watches from global pool of watches
  app.get("/api/getRadomWatches/:numWatches", getRandomWatches);

  //GET watches per page per name
  app.get("/api/getWatchesByName/:numWatchesPerPage/:userInput", getWatchesByName);

  //GET watches per page per body-location
  app.get("/api/getWatchesByBodyLocation/:numWatchesPerPage/:body_location", getNumWatchesByBodyLocation);

  //Get watches per page under a certain price
  app.get("/api/getWatchesByPrice/:numWatchesPerPage/:price", getNumWatchesByPrice);

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
