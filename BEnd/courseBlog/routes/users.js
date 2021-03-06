var express = require('express');
var router = express.Router();
var models = require('../models/SASMongoDB');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var user = new models.Users(request.body.user);
        user.save(function (error) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({user: user});
            }
        });
    })

    .get(parseUrlencoded, parseJSON, function (request, response) {
        var USER = request.query.filter;
        if (!USER) {
            models.Users.find(function (error, users) {
                if (error) response.send(error);
                response.json({user: users});
            });
        } else {
            models.Users.findOne({"userName": USER.userName}, function (error, User) {
                if (error) response.send(error);
                response.json({user: User});
            });
        }
    });

router.route('/:user_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Users.findById(request.params.user_id, function (error, user) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({user: user});
            }
        });
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Users.findById(request.params.user_id, function (error, user) {
            if (error) {
                response.send({error: error});
            }
            else {
                user.firstName = request.body.user.firstName;
                user.lastName = request.body.user.lastName;
                user.email = request.body.user.email;
                user.enabled = request.body.user.enabled;
                user.userShadow = request.body.user.userShadow;
                user.userRoles = request.body.user.userRoles;
                user.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({user: user});
                    }
                });
            }
        });
    })
    .delete(parseUrlencoded, parseJSON, function (request, response) {
        models.Users.findByIdAndRemove(request.params.user_id,
            function (error, deleted) {
                if (!error) {
                    response.json({user: deleted});
                };
            }
        );
    });

module.exports = router;
