const { MongoClient } = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options = {
    
}

const companies = require('./data/companies.json');
const items = require('./data/items.json');

const batchImportItems = async () => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Items");
    await db.collection("ItemsData").insertMany(items);
    client.close();
}

const batchImportCompanies = async () => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Companies");
    await db.collection("CompaniesData").insertMany(companies);
    client.close();
}

const insertCartId = async () =>{
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Carts");
    await db.collection("CartsData").insertOne({_id:"58bf7fa8-2892-46dd-a0dc-0f95188acea1"});
    client.close();
}


// batchImportItems();
// batchImportCompanies();
insertCartId()

