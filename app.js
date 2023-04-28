require('dotenv').config();

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const profileRoute = require('./routes/profile');
const foodRouter = require('./routes/food');
const menuRouter = require('./routes/menu');
const employeeRouter = require('./routes/employee');

const app = express();
const ports = process.env.PORT || 3000;


mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://phamhongbinh:phbNDTDT012@cluster0.qas9e46.mongodb.net/nuongcake?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    app.listen(ports, console.log(`Server is running on port ${ports}`));
}).catch((err) => {
    console.log(`Could not connect to database server`, err);
});

app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join('images')));
app.use('/api/profiles', profileRoute);
app.use('/api/foods', foodRouter);
app.use('/api/menus', menuRouter);
app.use('/api/employee', employeeRouter);