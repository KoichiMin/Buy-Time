//Mongo Setup
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require('uuid');

require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {};
const client = new MongoClient(MONGO_URI,options);

/*
Creates a cart with the item sent.
Provide the item in the body.
*/
const createCart = async(req, res) => {
    const item = {count:1,...req.body.item};
    const items = [item];
    const newCart = {
        _id:uuidv4(),
        items:items,
    }
    try {
        await client.connect();
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").insertOne(newCart);
        client.close();
        res.status(200).json({status:"success", newCart});
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message});
    }
}

/*
Returns All The Items In A Cart
Provide the Cart's id in the body
*/
const getCartItems = async(req, res) => {
    const cartId = req.body.cartId;
    try {
        await client.connect();
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").findOne({_id:cartId});
        if(serverData === null) {
            throw new Error(`The cart with id ${cartId} does not exist`);
        }
        const data = serverData.items;
        client.close();
        res.status(200).json({status:"success", data});
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message});
    }
}

/*
Returns A Specific Item In A Cart By Id
Provide the Cart's id and the item's id
*/
const getCartItem = async(req, res) => {
    const cartId = req.body.cartId;
    const itemId = req.body.itemId;
    try {
        await client.connect();
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").findOne({_id:cartId});
        if(serverData === null) {
            throw new Error(`The cart with Id ${cartId} does not exist`);
        }
        const data = serverData.items.find((item) => item._id === itemId);
        if(data === undefined) {
            throw new Error(`The item with Id ${itemId} does not exist`);
        }
        res.status(200).json({status:"success", data});
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message})
    }
}

/*
Add One Item To A Cart. 
Adds an extra property to items named "count" to track how many items of the same type have been added to the cart
Provide the cart's id and the item in the body
*/
const addItemCart = async(req, res) => {
    const cartId = req.body.cartId;
    let item = req.body.item;
    if (item.count === undefined || item.count === null) {
        item = {count:1,...req.body.item};
    }

    try {
        await client.connect();
        const query = {_id:cartId};
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").findOne(query);
        if (serverData === null) {
            throw new Error(`The cart with id ${cartId} does not exist`);
        }
        const itemInCart = serverData.items.find((cartItem) => cartItem._id === item._id);
        if(itemInCart !== undefined) {
            //Begin count update process if the item is already in the cart
            const cart = await db.collection("CartsData").findOne(query);
            let count = 0;
            let stockCount = 0;
            cart.items.forEach((cartItem) => {
                if(cartItem._id === item._id) {
                    count = cartItem.count;
                    stockCount = cartItem.numInStock;
                }
            })
            if(count + 1 > stockCount) {
                throw new Error("Cannot add more of this item to cart, out of stock");
            }
            //Logic to update count accordingly
            await db.collection("CartsData").updateMany(
                query,
                {$set: {
                    "items.$[element].count":count+1,
                }},
                {arrayFilters:[{"element._id":item._id}]},
            );
            const newCart = await db.collection("CartsData").findOne(query);
            client.close();
            res.status(200).json({status:"success", newCart});
        } else {
            //If it is a new Item, push that item into the cart with an initial count of 1
            const updatedCart = {$push: {
                items:item
            }};
            await db.collection("CartsData").updateOne(query,updatedCart);
            const newCart = await db.collection("CartsData").findOne(query);
            client.close();
            res.status(200).json({status:"success", newCart});
        }
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message})
    }
}

/*
Remove An Item From A Cart By Id
Provide the cart's id and the item's id
*/
const deleteItemCart = async(req, res) => {
    const cartId = req.body.cartId;
    const itemId = req.body.itemId;
    try {
        await client.connect();
        const query = {_id:cartId};
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").findOne(query);
        if (serverData === null) {
            throw new Error(`The cart with id ${cartId} does not exist`);
        }
        const itemInCart = serverData.items.find((cartItem) => cartItem._id === itemId);
        if(itemInCart !== undefined) {
            //If the item is already in the cart, begin deletion proccess
            const cart = await db.collection("CartsData").findOne(query);
            let count = 0;
            cart.items.forEach((cartItem) => {
                if(cartItem._id === itemId) {
                    count = cartItem.count;
                }
            })
            if(count - 1 === 0) {
                //If there aren't anymore left to remove, begin logic to remove the item
                db.collection("CartsData").updateMany(
                    query,
                    {$pull: {
                        items:{_id:itemId},
                    }},
                );
            } else {
                //If there are still some of the same item, reduce the count of said item
                await db.collection("CartsData").updateMany(
                    query,
                    {$set: {
                        "items.$[element].count":count-1,
                    }},
                    {arrayFilters:[{"element._id":itemId}]},
                );
            }
        } else {
            throw new Error(`The cart does not contain any more of the item ${itemId}`)
        }
        const newCart = await db.collection("CartsData").findOne(query);
        client.close();
        res.status(200).json({status:"success", newCart});
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message})
    }
}

/*
Delete A Cart By Id
Provide the cart's id
*/
const deleteCart = async (req,res) => {
    const cartId = req.body.cartId;
    try {
        await client.connect();
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").findOne({_id:cartId});
        if (serverData === null) {
            throw new Error(`The cart with id ${cartId} does not exist`);
        }
        const query = {_id:cartId};
        await db.collection("CartsData").deleteOne(query);
        const deletedCart = serverData;
        client.close();
        res.status(200).json({status:"success", deletedCart});
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message})
    }
}

/* 
Calculate A Cart's Total Value
Provide the cart's id
*/
const getTotalCartCost = async (req,res) => {
    const cartId = req.body.cartId;
    try {
        await client.connect();
        const db = client.db("Carts");
        const serverData = await db.collection("CartsData").findOne({_id:cartId});
        if (serverData === null) {
            throw new Error(`The cart with id ${cartId} does not exist`);
        }
        let total = 0;
        serverData.items.forEach((item) => {
            let price = item.price;
            let parsedPrice = price.slice(1,price.length);
            total += parseFloat(parsedPrice)*item.count;
        })
        const totalCost = total.toFixed(2);
        client.close();
        res.status(200).json({status:"success", totalCost});
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message})
    }
}

/*
Handles the checkout of a single cart by updating the item's stock based on count
Provide the cart's id
*/
const checkout = async(req, res) => {
    const cartId = req.body.cartId;
    try {
        await client.connect();
        const query = {_id:cartId};
        const db1 = client.db("Carts");
        const db2 = client.db("Items");
        const serverData = await db1.collection("CartsData").findOne(query);
        const updates = [];
        let failedUpdates = [];
        let successfulUpdates = [];
        serverData.items.forEach((item) => {
            updates.push({_id:item._id,count:item.count});
        })

        //Updates the stocks in items
        updates.forEach(async (update) => {
            let availableItem = await db2.collection("ItemsData").findOne({_id: update._id});
            if(availableItem.numInStock >= update.count) {
                await db2.collection("ItemsData").updateOne(
                    {_id:update._id},
                    {$set:{numInStock: availableItem.numInStock - update.count}}
                )
                successfulUpdates.push(update._id);
                //Delete the item from the cart that are successfully checked out.
                db1.collection("CartsData").updateMany(
                    query,
                    {$pull: {
                        items:{_id:update._id},
                    }},
                );
            } else {
                failedUpdates.push(update._id);
            }
        })
        
        const Items = await db2.collection("ItemsData").find().toArray();
        const newCart = await db1.collection("CartsData").findOne(query);
        client.close();
        res.status(200).json({
            status:"success", 
            warnings:{
                message: "These items were not updated due to lack of them in stock, their id's are provided in failedUpdates",
                failedUpdates
            },
            successfulUpdates,
            newCart,
            Items
        });
    } catch (err) {
        client.close();
        res.status(404).json({status:"error", message:err.message})
    }
}

module.exports = {
    createCart,
    getCartItems,
    getCartItem,
    addItemCart,
    deleteItemCart,
    deleteCart,
    getTotalCartCost,
    checkout,
};

