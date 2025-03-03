import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado en ${db.connection.host}:${db.connection.port}`);
  } catch (error) {
    console.error(`Error al conectar con MongoDB: ${error}`);
    process.exit(1);
  }
};

export default conectarDB;