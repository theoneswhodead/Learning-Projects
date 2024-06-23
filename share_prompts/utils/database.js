import mongoose from "mongoose";

let isConnected = false //track the conection

export const connectToDB = async => {
    mongoose.set('strictQuery', true)

    if(isConnected) {
        console.log('MongoDB is already connected')
        return;
    }

    try {
         mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        }) 
        
        isConnected = true
        console.log('MongoDB Connected')   
    } catch (error) {
       console.log(error) 
    }
}