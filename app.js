const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ordersRoutes = require('./routes/orders');
const app = express();


dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/orders', ordersRoutes);


// Простое API
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/api/orders', (req, res) => {
    const orders = [
        { id: 1, name: 'Order 1' },
        { id: 2, name: 'Order 2' },
    ];
    res.json(orders);
});


// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
