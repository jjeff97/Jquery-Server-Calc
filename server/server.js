const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyparser.urlencoded({extended: true}));
app.get('/calc', (req,res) => {
    console.log('GET route');
    res.send('Got it');
});

app.post('/calc', (req, res) => {
    console.log(req.body);
    res.send('got it')
})

app.listen( PORT, () => {
    console.log(`Listening on port: ${PORT}` );
});
