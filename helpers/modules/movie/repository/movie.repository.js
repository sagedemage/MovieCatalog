const db = require('../../../database')
const {v4: uuidv4} = require('uuid');

class MovieRepository {
    constructor() {
        this.tableName = 'Movie';
    }

    async findByID(MovieID) {
        const params = {
            TableName: this.tableName,
            Key: {
                MovieID,
            },
        };

        return await db.get(params).promise();
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                MovieID: uuidv4(),
                Name: data.Name,
                Length: data.Length,
                Maturity_Rating: data.Maturity_Rating,
                Rating: data.Rating,
                Year: data.Year 
            },
        };

        await db.put(params).promise();
        return params.Item;
    }

    async update(MovieID, data) {
        const params = {
            TableName: this.tableName,
            Key: {
                MovieID: MovieID
            },
            UpdateExpression: `set #Name = :Name, 
                                set #Length = :Length,
                                set #Maturity = :Maturity, 
                                set #Maturity_Rating = :Maturity_Rating, 
                                set #Rating = :Rating, 
                                set #Year = :Year`,
            ExpressionAttributeNames: {
                '#Name': `Name`,
                '#Length': `Length`,
                '#Maturity': `Maturity`,
                '#Maturity_Rating': `Maturity_Rating`,
                '#Rating': `Rating`,
                '#Year': `Year`,
            },
            ExpressionAttributeValues: {
                ":Name": data.Name,
                ":Length": data.Length,
                ":Maturity": data.Maturity,
                ":Maturity_Rating": data.Maturity_Rating,
                ":Rating": data.Rating,
                ":Year": data.Year
            },
            ReturnValues: `UPDATED_NEW`,
        }
    }

    async deleteByID(MovieID) {
        const params = {
            TableName: this.tableName,
            Key: {
                MovieID,
            },
        };

        return await db.delete(params).promise();
    }

}

module.exports = new MovieRepository();