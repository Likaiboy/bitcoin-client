var https = require('https');

https.get('https://blockchain.info/stats?format=json',function(res){
    console.log(res.statusCode);
    var data = '';

    res.on('data',function(d){
       data+=d;
    });

    res.on('end',function(){
        console.log(data.toString());
    });

}).on('error',function(e){
    console.log(e.message);
});