var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var mysort = {id:1};
    db.db("firstdatabase").collection("employees").find().sort(mysort).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
    });
});