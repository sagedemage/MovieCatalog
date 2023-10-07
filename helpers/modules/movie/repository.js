const db = require('../../database')
const {v4: uuidv4} = require('uuid');

class MovieRepository {
    constructor() {
        this.tableName = 'Movie';
    }

    async getByID(MovieID) {
        const params = {
            TableName: this.tableName,
            Key: {
                MovieID,
            },
        };

        return await db.get(params);
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

        await db.put(params);
        return params.Item;
    }

    async update(MovieID, data) {
        const params = {
            TableName: this.tableName,
            Key: {
                MovieID: MovieID
            },
            UpdateExpression: `set #Name = :Name, #Length = :Length, #Maturity_Rating = :Maturity_Rating, 
                                #Rating = :Rating, #Year = :Year`,
            ExpressionAttributeNames: {
                '#Name': `Name`,
                '#Length': `Length`,
                '#Maturity_Rating': `Maturity_Rating`,
                '#Rating': `Rating`,
                '#Year': `Year`,
            },
            ExpressionAttributeValues: {
                ":Name": data.Name,
                ":Length": data.Length,
                ":Maturity_Rating": data.Maturity_Rating,
                ":Rating": data.Rating,
                ":Year": data.Year
            },
            ReturnValues: `UPDATED_NEW`,
        };

        const update = await db.update(params);
        
        return update.Attributes;
    }

    async deleteByID(MovieID) {
        const params = {
            TableName: this.tableName,
            Key: {
                MovieID,
            },
        };

        return await db.delete(params);
    }

    async getAll() {
        const params = {
            TableName: this.tableName,
        };

        const movies = await db.scan(params);

        return movies.Items;
    }

}

module.exports = new MovieRepository();