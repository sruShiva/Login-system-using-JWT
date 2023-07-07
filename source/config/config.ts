import dotenv from 'dotenv';

dotenv.config();


const MONGO_OPTIONS = {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // socketTimeoutMS: 2500,
    // keepAlive: true,
    // poolSize: 50,
    // autoIndex: false,
    // retryWrites: false
            maxPoolSize: 50,
            wtimeoutMS: 2500,
            useNewUrlParser: true

    
};


const MONGO_USERNAME= process.env.MONGO_USERNAME || 'user2'
const MONGO_PASSWORD= process.env.MONGO_PASSWORD || 'mongo12345' //password
const MONGO_HOST= process.env.MONGO_HOST || 'cluster0.dekvljj.mongodb.net' //clustername

const MONGO ={
    host : MONGO_HOST,
    options:MONGO_OPTIONS,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    //url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
    url:'mongodb+srv://user2:mongo12345@cluster0.dekvljj.mongodb.net/'
};
//mongodb+srv://sruthi:<password>@cluster0.dekvljj.mongodb.net/
//mongodb+srv://sruthi:mongo1234@cluster0.dekvljj.mongodb.net/
//mongodb+srv://<username>:<password>@cluster0.dekvljj.mongodb.net/
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "coolIssuer";
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || "superencryptedsecret";


const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token:{
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer:SERVER_TOKEN_ISSUER,
        secret:SERVER_TOKEN_SECRET
    }
};

const config = {
    mongo:MONGO,
    server: SERVER
};

export default config;