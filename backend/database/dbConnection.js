import mongoose from "mongoose";

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGODB_URI,{
        dbName: "SCHOOL MANAGEMENT SYSTEM", // database name
})
.then(() =>{
    console.log("Database connected")
})
.catch((err) =>{
    console.log("Error occured when connecting with database")

    console.log(err)
})
     
}