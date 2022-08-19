//setting up mongoDB
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

// const options = {

// }

//creating client
const client = new MongoClient(MONGO_URI)

// GET function to get an array of all companies
const getAllCompanies = async (req, res) => {
    try {

        await client.connect();
        const db = client.db("Companies");
        const result = await db.collection("CompaniesData").find().toArray()

        if(result === null){
            throw new Error("No companies found!")
        }

        res.status(200).json({ status: 200, data: result, message: "success" })
        client.close()

    } catch (err) {
        res.status(404).json({ status: 404, message: err.message })
        client.close()
    }
}

//GET function to get one company based off Id
const getCompany = async (req, res) => {

    try{
        await client.connect();
        const db = client.db("Companies");

        const companyId = req.params.companyId
        const result = await db.collection("CompaniesData").findOne({_id: Number(companyId)})

        result
        ? res.status(200).json({ status: 200, data: result, message: "success" })
        : res.status(404).json({ status: 404, message: "Id does not exist" })

        client.close();

    } catch (err) {
        res.status(400).json({ status: 400, message: err.message })
        client.close();
    }
}

module.exports = {
    getAllCompanies,
    getCompany,
};