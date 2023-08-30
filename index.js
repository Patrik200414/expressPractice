const express = require('express');
const app = express();

app.get('/:userName', (req, res) => {
    const q = req.query;
    const keys = Object.keys(q);
    const string = keys.map(item => `<p>${req.params.userName}: ${q[item]}</p>`).join('');
    res.send(string);
});

app.get('/subpage', (req, res) => {
    res.send('Sub-page');
})

app.get('/user/:userName', (req, res) => {
    console.log(req.params);
    res.send();
})

app.get('/math/:operation', (req, res) => {
    const x = req.query.x;
    const y = req.query.y;

    const operations = req.params.operation;
    console.log(operations);

    const result = operations === "add" ? x + y : operations === "subtract" ? x - y : operations === "multiply" ? x * y : operations === "divide" ? x / y : 'Unrecognizable operation name';

    const apiObject = {
        numbers: {
            x,
            y
        },
        operations,
        result
    }

    res.send(apiObject);

})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})