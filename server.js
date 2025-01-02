const express = require('express');
const cors = require('cors');
const ordersRoutes = require('./routes/orders');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Маршруты
app.get('/', (req, res) => {
    res.send('Бэкенд работает!');
});
app.use('/api/orders', ordersRoutes);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
