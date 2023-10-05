//var AWS = require('aws-sdk');
var { DynamoDBDocument } = require("@aws-sdk/lib-dynamodb");
var { DynamoDB } = require("@aws-sdk/client-dynamodb");
require('dotenv').config();

/*
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
    endpoint: process.env.ENDPOINT,
})
*/

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