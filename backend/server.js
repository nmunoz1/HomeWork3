var express = require('express'); // remember to install these in the top directory to fill in 
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static('../public/'));
var database = require('./database.json');
// Don't change anything above this line unless you know what it will do

//var fs = require('fs');
//var db = fs.readFileSync('database.json');
// console.log(JSON.parse(db))
//console.log(JSON.parse(db))
console.log(database[0].username)
console.log(database.length)

app.get('/',function(req,res){
    // Right now this does nothing. To send the index file from the public directory follow the methods in the class example
    // You will need to add the path to the index file public/index.html since we have a slightly more complex set up now.
    res.sendFile(path.join(__dirname + 'public/index.html'));
});

var checkUser = function(user,password){
    var i;
    for(i=0; i <= database.length; i++){
        console.log(database[i])
        if (user == database[i].username){
            if(password == database[i].password){
                return true;
            }
        } else {
            return false;
        }
    }
}

app.get('/users/:username/password/:password',function(req,res){

    var user = req.params.username;
    var password = req.params.password;
    console.log(user)
    console.log(password)
    if (checkUser(user,password)){
        res.send("Your login was successful")
    } else {
        res.send ("Your login failed - check your username and password combination")
    }

});




// You will need to add more routes than just '/' so that your website can talk to your webserver using the get XMLHttpRequests


app.listen(8080);


