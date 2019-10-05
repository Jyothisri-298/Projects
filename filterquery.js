var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var myquery = {name:"Riya"}
    db.db("firstdatabase").collection("employees").find(myquery).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
    });
});