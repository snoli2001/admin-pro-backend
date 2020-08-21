require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config')


// Create the express server
const app = express();

// Data base connection
dbConnection();

// Cors config
app.use(cors());

//Routes
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg:'Hola mundo'
    });

} );

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto '+ process.env.PORT);
} );
