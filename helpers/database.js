//var AWS = require('aws-sdk');
var { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");
var { DynamoDB } = require("@aws-sdk/client-dynamodb");
require('dotenv').config();

const dynamodb = new DynamoDB({
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
    }
})

const db = DynamoDBDocument.from(dynamodb, {
    marshallOptions: {
        convertEmptyValues: true
    }
});

module.exports = db;