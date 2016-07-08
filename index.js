var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

var colors = [0, 0, 0];

app.get('/getcolor', function (request, response) {
    if (req.param('id')) {
        response.send(colors[req.param('id')] + "");
    } else {
        response.send("0");
    }
});
app.get('/setcolor', function (request, response) {
    if (req.param('id') && req.param('color')) {
        colors[req.param('id')] = req.param('color');
    }
    response.send("sent!!");
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});