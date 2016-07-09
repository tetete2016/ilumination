var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));

var colors = [0, 0, 0];

app.get('/getcolor', function (request, response) {
    if (req.params.id) {
        response.send(colors[req.params.id] + "");
    } else {
        response.send("0");
    }
});
app.get('/setcolor', function (request, response) {
    if (req.params.id && req.params.color) {
        colors[req.params.id] = req.params.color;
    }
    response.send("sent!!");
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});