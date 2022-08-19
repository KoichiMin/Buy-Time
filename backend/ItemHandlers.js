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
        const {itemId} = req.params;
        await client.connect();
        const db = client.db("Items");
        const result = await db.collection("ItemsData").findOne({_id: Number(itemId)});
        if(result === null){
            throw new Error(` the item ${itemId} was not found `) 
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

/*
Gets all the categories
*/
const getAllCategories = async (req,res) => {
    try{
        await client.connect();
        const db = client.db("Items");
        const AllItems = await db.collection("ItemsData").find().toArray();
        
        let categories=[];

        AllItems.forEach((item) => {
            if(!categories.includes(item.category)) {
                categories.push(item.category);
            }
        })

        client.close()
        res.status(200).json({status: 200, categories})
    }
    catch(err){
        client.close();
        res.status(400).json({status: 400, error: err.message})
    }
}

/*
Creates a category in db with all of the watches in that category
*/
const getNumWatchesByCategory = async (req,res) => {
    const numOfWatchesPerPage = req.body.numWatches;
    const category = req.body.category
    try{
        await client.connect();
        const db = client.db("Items");
        const AllItems = await db.collection("ItemsData").find().toArray();
        
        let AllWatchesInCategory=[];

        AllItems.forEach((item) => {
            if(item.category === category) {
                AllWatchesInCategory.push(item);
            }
        })

        let pages = [];
        let pageNum = 1;

        while(AllWatchesInCategory.length > 0) {
            let watches = [];
            for(let i = 0; i < numOfWatchesPerPage; i++) {
                if(AllWatchesInCategory[i] !== undefined) {
                    watches.push(AllWatchesInCategory[i])
                    AllWatchesInCategory.shift();
                }
            }
            pages.push({
                pageNumber:pageNum,
                watchesInPage:watches,
            });
            pageNum++;
        }

        client.close()
        res.status(200).json({status: "success", pages})
    }
    catch(err){
        client.close();
        res.status(400).json({status: 400, error: err.message})
    }
}

const getRandomWatches = async (req, res) => {
    const numOfWatches = req.body.numWatches;
    try {
        await client.connect();
        const db = client.db("Items");
        const serverData = await db.collection("ItemsData").find().toArray();
        const watchesInDb = serverData.length;
        
        let radomIndexes = [];
        let watches = [];

        for(let i = 0; i < numOfWatches; i++) {
            let radomIndex = Math.floor(Math.random()*watchesInDb);
            while(radomIndexes.includes(radomIndex)) {
                radomIndex = Math.floor(Math.random()*watchesInDb);
            }
            radomIndexes.push(radomIndex);
        }

        radomIndexes.forEach((i) => {
            watches.push(serverData[i]);
        })

        client.close()
        res.status(200).json({status: "success", watches})
    } catch (err) {
        client.close();
        res.status(400).json({status: 400, error: err.message})
    }
}

module.exports = {
    getAllItems, 
    getItem, 
    changeItemStock,
    getAllCategories,
    getNumWatchesByCategory,
    getRandomWatches,
}