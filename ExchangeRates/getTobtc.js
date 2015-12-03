/**
 * Created by likai on 西暦15/12/03.
 */
var https = require('https');

var currency = 'USD';
var value = 500;

var url = 'https://blockchain.info/tobtc?currency='+currency+'&value='+value;

https.get(url,function(res){
    res.on('data',function(d){
        console.log(d.toString());
    });
}).on('error',function(e){
    console.log('error:'+e.message);
});