const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hello Heroku -- Node');
});

// Default Heroku PORT
app.listen(process.env.PORT || 8080);