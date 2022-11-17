import express from 'express';
import errorMiddleware from './Middlewares/errorMiddleware';
import carRoute from './Routes/CarRoute';

const app = express();

app.use(express.json());
app.use('/cars', carRoute);

app.use(errorMiddleware);

export default app;
