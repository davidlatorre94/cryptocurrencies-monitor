import express from 'express';
import userRoutes from './routes/user-routes';
import cryptocurrencieRoutes from './routes/cryptocurrencie-route';
import './config/database';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/cryptocurrencies', cryptocurrencieRoutes);
app.use('/users', userRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});