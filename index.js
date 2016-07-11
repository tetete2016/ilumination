var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

var colors = [0, 0, 0];

app.get('/getcolor', function (request, response) {
    console.log(request.query);
    var q = JSON.parse(request.query);
    console.log(q);
    if (q.id != null) {
        var index = Number.parseInt(q.id, 10);
        if (0 <= index && index < colors.length) {
            response.send(colors[index]);
        }
    }
    response.send("0");
});
app.get('/setcolor', function (request, response) {
    console.log(request.query);
    var q = JSON.parse(request.query);
    console.log(q);
    if (q.id != null && q.color != 0) {
        var index = Number.parseInt(q.id, 10);
        if (index) {
            colors[index] = q.color;
        }
    }
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});