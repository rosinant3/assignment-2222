var express = require('express'),
path = require('path'),
app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('dist'));

app.get('/mobile', function (req, res) {
res.send('see this site on a computer plz')
})

app.listen(app.get('port'), function(err) {
if (err) {
console.log(err);
} else {
console.log('Running on port: ' + app.get('port')); }
});
