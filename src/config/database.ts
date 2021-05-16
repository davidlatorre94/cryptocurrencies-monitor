import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URI || "mongodb://localhost/wolox", {
    useNewUrlParser: true
})
.then(db => console.log("DB is connect")).catch(err => console.log("Error database connect: ", err));

