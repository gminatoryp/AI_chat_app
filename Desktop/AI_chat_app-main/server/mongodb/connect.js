import mongoose, { mongo } from 'mongoose';

//Function to connect to mongodb
const connectDB = (url) => {
    mongoose.set('strickQuery, true')

    //connecting to db
    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('err'))

}

export default connectDB;