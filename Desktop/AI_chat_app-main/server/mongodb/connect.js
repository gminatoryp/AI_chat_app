import mongoose from 'mongoose';

//Function to connect to mongodb
const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    //connecting to db
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('failed to connect to mongo'))

}

export default connectDB;