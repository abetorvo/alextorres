let express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/certificates', function(req, res){
    res.render('certificates');
});

app.get('/projects/colorgame', function(req, res){
    res.render('projects/colorgame');
});

app.get('/projects/tictactoe', function(req, res){
    res.render('projects/tictactoe');
});

app.get('*', function(req, res){
    res.send('Could not find the requested page');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is running...');
});