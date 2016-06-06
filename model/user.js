/**
 * Created by benvo_000 on 6/6/2559.
 */
var Sequelize = require('sequelize');

module.exports = {
    define : define,
}

function define(sequelize){
    var User = sequelize.define('user', {
        email : {
            type : Sequelize.STRING,
            field :'email',
        },
        password : {
            type : Sequelize.STRING,
            field :'password',
        },
        profile : {
            type : Sequelize.STRING,
            field : 'profile',
        },
        name : {
            type : Sequelize.STRING,
            field : 'name',
        },
        firebaseId : {
            type : Sequelize.STRING,
            field : 'firebase_id',
        },
        facebookId : {
            type : Sequelize.STRING,
            field : 'facebook_id'
        }
    });

    return User;
}


