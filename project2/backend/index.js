import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from './dao/RestaurantsDAO.js'
import ReviewsDAO from './dao/ReviewsDAO.js'

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.y9ryn.mongodb.net/${process.env.DB_NAME}`

MongoClient.connect(
    connectionString,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true }
        )
        .catch(err => {
        console.error(err.stack)
        process.exit(1)
        })
        .then(async client => {
        await RestaurantsDAO.injectDB(client);
        await ReviewsDAO.injectDB(client);
        app.listen(port , () => {
            console.log(`listening on port ${port}`)
        })
    })