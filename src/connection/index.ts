//import * as mongo from 'mongodb'

const { MongoClient } = require('mongodb');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connect to MongoDB using async/await
export const ConnectasyncDB = async (address: string | undefined) => {   
    console.log('address', address);
    await MongoClient.connect(address, options,  (err: any) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Successfully Connected!");
        } 
    });
}

// Connect to MongoDB after creating Client object
export const PromiseDBConnection = (address: string | undefined) => {
    const connectMBdb =  new Promise((resolve, reject)=> {
        const client = new MongoClient(address, options);
        if(client.connect()){
             resolve("Successfully Connected");
        } else {
            reject("Error occured");
        }
    });
    
    return connectMBdb.then((message)=> {
        console.log(message);
         return message;
        })
}

//Connect to MongoDB using promise
export const ConnectDB = async (address: string | undefined) => {
    console.log('address', address);
    const client = new MongoClient(address, options); 
    try {
        // Connect to the MongoDB cluster
        await client.connect();  
        return "Successfully Connected!";
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


