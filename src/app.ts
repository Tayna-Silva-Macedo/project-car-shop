import express from 'express';
import errorMiddleware from './Middlewares/errorMiddleware';
import carRoute from './Routes/CarRoute';
import motorcycleRoute from './Routes/MotorcycleRoute';

const app = express();

app.use(express.json());
app.use('/cars', carRoute);
app.use('/motorcycles', motorcycleRoute);

app.use(errorMiddleware);

export default app;
