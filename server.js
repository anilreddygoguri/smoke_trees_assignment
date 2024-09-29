const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/user');
const Address = require('./models/address');
const userRoutes=require('./routes/userRoutes')

const app = express();
app.use(express.json());

app.use('/', userRoutes);

User.associate({ Address });
Address.associate({ User });


sequelize.sync()
    .then(() => {
        console.log('Database connected and synced');
    })
    .catch(error => {
        console.error('Error syncing database:', error);
    });

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
