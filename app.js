let express = require('express'),
    app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('landing');
});

app.get('*', function(req, res){
    res.send('Could not find the requested page');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server is running...');
});