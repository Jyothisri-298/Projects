var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var myobj = {id:1, name: "Riya", city: "Hyd"};
    db.db("firstdatabase").collection("employees").insertOne(myobj,function(err,res){
        if(err) throw err;
        console.log('One document inserted into collection');
    });
});