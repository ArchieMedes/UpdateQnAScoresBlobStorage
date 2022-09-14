const express = require('express');
const morgan = require('morgan');
// application
const app = express();

// settings: adecuamos valores a los atributos "port" y "json spaces" dentro de la config de nuestra app
app.set('port', process.env.PORT || process.env.port || 3002);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json()); // para soportar formatos json por parte de mi servidor

// ROUTES
app.use('/test', require('./routes/index')); //http://localhost:3002/test
app.use('/api/updateQnAScores', require('./routes/updateQnAScores')); //http://localhost:3002/api/updateQnAScores

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});