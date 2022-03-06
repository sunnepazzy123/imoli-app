import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { specs } from './swagger';

const app = express();

import moviesRoutes from './routes';

//middlewares setups
app.use(express.json());
app.use('/api', moviesRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs)); 



export { app }
