require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//parse / x--www-form-urlencode
app.use(bodyParser.urlencoded({ extended: false }));
//parse/json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('get usuario');
});
app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Elnombre es necesario'
        })
    }
    res.json({ persona: body });
});
app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    });
});

app.listen(process.env.PORT, () => console.log('Escucando puerto', 3000));