var https = require('https');

https.get('',function(res){
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