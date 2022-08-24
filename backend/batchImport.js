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

batchImportItems();
// batchImportCompanies();

