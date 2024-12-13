import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Santiago:12345678910@cluster0.qku3i.mongodb.net/FinalCossio?retryWrites=true&w=majority'); 
    console.log('>>> DB conectada');
  } catch (error) {
    console.error('Error al conectar la base de datos:', error);
  }
};

