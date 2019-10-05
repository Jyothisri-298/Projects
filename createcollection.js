var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    db.db("firstdatabase").createCollection("employees",function(err,res){
        if(err) throw err;
        console.log('Collection created');
        db.close();
    });
});