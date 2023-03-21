import mongoose from 'mongoose';

const MONGO_CONNECTION_STRING =
    "mongodb+srv://greenaimergen:jbmTS5PMjvbhsmxn@test.2idnpwg.mongodb.net/test";

await mongoose 
    .connect(MONGO_CONNECTION_STRING)
    .then(()=>{
        console.log('Mongo -d amjilttai holbogdloo');
    })
    .catch((err)=>{
        console.log('Holbogdoj chadsangui'. err);
    });

export default mongoose.connection;