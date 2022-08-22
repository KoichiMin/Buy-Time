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
        const itemId = Number(req.params.itemId);
        await client.connect();
        const db = client.db("Items");
        const result = await db.collection("ItemsData").findOne({_id: itemId});
        if(result === null){
            throw new Error(` the item ${itemId} was not found `) 
        }
        client.close();
        res.status(200).json({ status: 200, data: result, message: {success: "the requested data"}  })
    }
    catch (err){
        res.status(400).json({status: 400, error: err.message});
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
Gets all of the watches sorted out by page number to be displayed by page in a category
*/
const getNumWatchesByCategory = async (req,res) => {
    const numOfWatchesPerPage = Number(req.params.numWatchesPerPage);
    const category = req.params.category;
    const regularExpression = RegExp(category, "i");
    try{
        await client.connect();
        const db = client.db("Items");
    
        let AllWatchesInCategory = await db.collection("ItemsData").find(
            { category: { $regex: regularExpression}}
        ).toArray();

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

/*
Gets a set of random watches
*/
const getRandomWatches = async (req, res) => {
    const numOfWatches = Number(req.params.numWatches);
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

/* 
Finds a (set of) watch(es) based on name
*/
const getWatchesByName = async (req,res) => {
    const userInput = req.params.userInput;
    const numOfWatchesPerPage = Number(req.params.numWatchesPerPage);
    const regularExpression = RegExp(userInput, "i");
    try{
        await client.connect();
        const db = client.db("Items");

        let AllWatchesMatchingDescription = await db.collection("ItemsData").find(
            { name: { $regex: regularExpression}}
        ).toArray();

        let pages = [];
        let pageNum = 1;

        while(AllWatchesMatchingDescription.length > 0) {
            let watches = [];
            for(let i = 0; i < numOfWatchesPerPage; i++) {
                if(AllWatchesMatchingDescription[i] !== undefined) {
                    watches.push(AllWatchesMatchingDescription[i])
                    AllWatchesMatchingDescription.shift();
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

/*
Gets all of the watches sorted out by page number to be displayed by page by body-location
*/
const getNumWatchesByBodyLocation = async (req,res) => {
    const numOfWatchesPerPage = Number(req.params.numWatchesPerPage);
    const bodyLocation = req.params.body_location;
    const regularExpression = RegExp(bodyLocation, "i");
    try{
        await client.connect();
        const db = client.db("Items");
    
        let AllWatchesMatching = await db.collection("ItemsData").find(
            { body_location: { $regex: regularExpression}}
        ).toArray();

        let pages = [];
        let pageNum = 1;

        while(AllWatchesMatching.length > 0) {
            let watches = [];
            for(let i = 0; i < numOfWatchesPerPage; i++) {
                if(AllWatchesMatching[i] !== undefined) {
                    watches.push(AllWatchesMatching[i])
                    AllWatchesMatching.shift();
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

/*
Gets all of the watches sorted out by page number to be displayed by page by price
*/
const getNumWatchesByPrice = async (req,res) => {
    const numOfWatchesPerPage = Number(req.params.numWatchesPerPage);
    const price = req.params.price;

    try{
        await client.connect();
        const db = client.db("Items");
    
        let AllWatches = await db.collection("ItemsData").find().toArray();

        let AllWatchesMatching = [];

        let pages = [];
        let pageNum = 1;

        AllWatches.forEach((watch) => {
            if(parseFloat(watch.price.slice(1,watch.price.length)) <= price) {
                AllWatchesMatching.push(watch);
            }
        })

        while(AllWatchesMatching.length > 0) {
            let watches = [];
            for(let i = 0; i < numOfWatchesPerPage; i++) {
                if(AllWatchesMatching[i] !== undefined) {
                    watches.push(AllWatchesMatching[i])
                    AllWatchesMatching.shift();
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

/*
Gets the list of watches names and id
*/
const getWatchesNames = async (req,res) => {
    const userInput = req.params.userInput;
    try{
        await client.connect();
        const db = client.db("Items");

        let AllWatches = await db.collection("ItemsData").find().toArray();
        let ids = [];
        let names = AllWatches.map((watch) => {
            ids.push(watch._id);
            return watch.name;
        })
        
        client.close()
        res.status(200).json({status: "success", names, ids})
    }
    catch(err){
        client.close();
        res.status(400).json({status: 400, error: err.message})
    }
}


//PATCH to remove one num of watches in stock for Buy Now

const removeOneStock = async (req, res) => {
    const itemId = req.params.itemId;

    try {
        await client.connect();
        const db = client.db("Items");
        const item = await db.collection("ItemsData").findOne({_id: Number(itemId)});

        if(item.numInStock >= 1) {
            const result = await db.collection("ItemsData").updateOne({_id: item._id}, {$set: {numInStock: item.numInStock - 1}})
            res.status(200).json({ status: 200, data: result})
        } else {
            throw new Error("No more in stock.")
        }
        client.close()
    } catch (err) {
        client.close();
        res.status(404).json({ status: 404, message: err.message })
    }
}


module.exports = {
    getAllItems, 
    getItem, 
    getAllCategories,
    getNumWatchesByCategory,
    getRandomWatches,
    getWatchesByName,
    getNumWatchesByBodyLocation,
    getNumWatchesByPrice,
    getWatchesNames,
    removeOneStock,
}