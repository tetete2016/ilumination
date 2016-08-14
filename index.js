var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var responseArr = [];

app.get('/getcolor', function (request, response) {
    console.log(request.query);
    responseArr.push(response);
    //response.send("[" + colors + "]");
});
app.get('/setcolor', function (request, response) {
    console.log(request.query);
    if (request.query.id != null && request.query.color != null) {
        var index = Number.parseInt(request.query.id, 10);
        colors[index] = request.query.color;
    }
    response.send("sent");
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
    for (var i = 0; i < colors.length; i++) {
        colors[i] = 0;
    }
    setInterval(timer, 1000);
});
function timer(){
    for (var i = 0; i < responseArr.length; i++) {
        responseArr[i].send(JSON.stringify(colors));
    }
    responseArr = [];
}