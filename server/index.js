var express = require('express'),
    app = express();

const todos = [
    {
        name: 'task1',
        content: 'con1'
    },
    {
        name: 'task2',
        content: 'con2'
    }
];

app.get('/getList', function(req, res) {
    res.json({
        todos: todos
    })
})

app.get('/', function(req, res) {
    res.send('dd')
});

app.listen(4200, function() {
    console.log('4200');
})