var express = require('express'),
    app = express();
    
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/public/'));



app.get('/', (req, res)=>{
    res.render('home'); 
});



















app.listen(process.env.PORT, process.env.IP, function(){
    console.log('servering up the labb');
});