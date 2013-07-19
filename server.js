var express = require('express'),
    markers = require('./routes/markers');
 
var app = express();

app.get('/markers/testjs', markers.findTest);
app.get('/markers/:id/reports', markers.findByManager);
app.get('/markers/:id', markers.findById);
app.get('/markers', markers.findAll);

app.listen(3000);
console.log('Listening on port 3000...');