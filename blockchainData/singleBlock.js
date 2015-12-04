var https = require('https');

var block_hash = '0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103';
var url = 'https://blockchain.info/rawblock/'+block_hash;
https.get(url,function(res){
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