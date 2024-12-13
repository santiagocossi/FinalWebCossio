import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/FinalCossio'); 
    console.log('>>> DB conectada');
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
};

