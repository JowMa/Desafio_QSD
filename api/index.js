const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT");
    res.header("Access-Control-Allow-Headers", "content-type");
    req.header("Access-Control-Allow-Headers", "content-type");
    req.header("Access-Control-Allow-Method", "POST");
    app.use(cors());
    next();
});



routes(app);


app.listen(port, () => console.log(`servidor esta rodando na porta de ${port}`));

module.exports = app;