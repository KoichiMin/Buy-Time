// "use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {

};
const client = new MongoClient(MONGO_URI, options);

    // get access to all the items from the database 
    const getAllItems = async (req, res) => {
        try{
            await client.connect();
            const db = client.db("Items");
            const result = await db.collection("ItemsData").find().toArray();
            client.close();
            res.status(200).json({ status: 200, result , message: {success: "the requested data"}  })
        }
        catch (err){
            client.close();
            res.status(400).json({status: 400, error: err.message})
        }
    };

    // get access to a single item from the database using req.body 
    // the frontend will need to push out information to be able to get access to the single item
    const getItem = async (req, res) =>{
        try{
            const {itemId} = req.params
            await client.connect();
            const db = client.db("Items");
            const result = await db.collection("ItemsData").findOne({_id: Number(item)});
            if(result === null){
                throw new Error(` the item ${item} was not found `) 
            }
            client.close();
            res.status(200).json({ status: 200, data: result, message: {success: "the requested data"}  })
    
        }
        catch (err){
            res.status(400).json({status: 400, error: err.message})
        }
    }

    // change the number of stocks that are available using the req.body 
    // the frontend will need to provide the Id of the item and a number
    const changeItemStock = async (req, res) =>{
        const Id = req.body.id
        const num = req.body.num;
        try{
        
            await client.connect();
            const db = client.db("Items");
            const availableItem = await db.collection("ItemsData").findOne({"_id": Id});
            if(availableItem === null){
                throw new Error("item doesnt exist!")
            } 
            if(availableItem.numInStock > num){
                await db.collection("ItemsData").updateOne({"_id": Id }, {"$set":{numInStock: availableItem.numInStock - num},})
            } else{
                throw new Error("bruh we don't got it")
            }
            const updatedItem = await db.collection("ItemsData").findOne({"_id": Id});
            client.close()
            res.status(200).json({status: 200, updatedItem})
        }
        catch(err){
            client.close();
            res.status(400).json({status: 400, error: err.message})
        }
    }

module.exports = {getAllItems, getItem, changeItemStock}