const createHandler = require("azure-function-express").createHandler;
const express = require("express");
const {
    Aborter,
    BlockBlobURL,
    ContainerURL,
    ServiceURL,
    SharedKeyCredential,
    StorageURL,
    uploadStreamToBlockBlob,
    uploadFileToBlockBlob
} = require('@azure/storage-blob');
const fileUpload = require('express-fileupload');
const fs = require("fs");
const path = require("path");



if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const STORAGE_ACCOUNT_NAME = 'YOUR Storage Name';
const ACCOUNT_ACCESS_KEY = 'YOUR KEY';

const ONE_MEGABYTE = 1024 * 1024;
const FOUR_MEGABYTES = 4 * ONE_MEGABYTE;
const ONE_MINUTE = 60 * 1000;




 
// Create express app as usual
const app = express();

// default options
app.use(fileUpload());



app.post("/api/httpTrigger", (req, res) => {
    //let sampleFile = req.files.image;
    let temp = JSON.stringify(req.file);
  
    res.send("HERRO POST"+temp);
});



app.get("/api/httpTrigger", (req, res) => {
  
    res.send("HERRO")
});
 
// Binds the express app to an Azure Function handler
module.exports = createHandler(app);