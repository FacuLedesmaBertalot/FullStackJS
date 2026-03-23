import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const db = await mongoose.connect("mongodb://faculedesmabertalot_db_user:hk9f7cyX72jy6egH@cluster0.ecz8ulx.mongodb.net/?appName=Cluster0"
        );


        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;