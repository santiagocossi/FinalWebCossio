import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import planillaRoutes from './routes/planilla.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', planillaRoutes);

export default app;
