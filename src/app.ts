import express from 'express';
const app = express();

import moviesRoutes from './routes';

//middlewares setups
app.use(express.json());
app.use('/api', moviesRoutes);


export { app }
