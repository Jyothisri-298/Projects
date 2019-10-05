var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    db.db("firstdatabase").collection("employees").findOne({},function(err,res){
        if(err) throw err;
        console.log(res);
    });
});