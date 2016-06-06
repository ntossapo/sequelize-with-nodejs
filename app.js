/**
 * Created by benvo_000 on 6/6/2559.
 */
var appConfig = require('./app_config');
var dbConfig = require('./db_config');

var express = require('express');
var Sequelize = require('sequelize');

var app = express();
var sequelize = new Sequelize(dbConfig.protocol);

var user = require('./model/user');
var userModel = user.define(sequelize);

sequelize.sync();

app.use(require('body-parser').urlencoded({ extended:true }));
app.use(function(req, res, next){
    req.model = {};
    req.model.user = userModel;
    next();
});

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.post('/user', function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    
    var User = req.model.user;
    User.create({
        email : email,
        password : password,
    }).then(function(user){
        res.end('user created' + user);
    });
});

app.listen(appConfig.port, function(){
    console.log('Server Start Run @ Port' + appConfig.port);
});
