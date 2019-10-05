var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/firstdatabase";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var myobj = [
        {id:2, name: "Laya", city: "Bangalore"},
        {id:3, name: "Amulya", city: "Mumbai"},
        {id:4, name: "Honey", city: "Pune"},
    ];
    db.db("firstdatabase").collection("employees").insert(myobj,function(err,res){
        if(err) throw err;
        console.log('Multiple documents inserted into collection');
    });
});