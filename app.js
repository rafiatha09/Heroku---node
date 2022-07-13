const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hallo Muthia Noor Hanifah');
});

// Default Heroku PORT
app.listen(process.env.PORT || 8080);