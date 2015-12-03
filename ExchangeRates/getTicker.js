/**
 * Created by likai on 西暦15/12/03.
 */
var https = require('https');
https.get('https://blockchain.info/ticker',function(res){
   console.log(res.statusCode);
    var data = '';
    res.on('data', function(d) {
        data+=d;
    });

    res.on('end',function(){
        console.log(data.toString());
    });

   // console.log(res);
}).on('error',function(e){
    console.log('error:'+e.message);
});

