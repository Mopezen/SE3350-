var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://SE3350:ouda@ds059115.mongolab.com:59115/se3350');

var app = express();

var bodyParser = require('body-parser');
var logger = require('./logger');


app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(logger);
// configure app to use bodyParser()
// this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(express.static('public'));

var studentsSchema = mongoose.Schema({
    number: String,
    firstName: String,
    lastName: String,
    DOB: String,
    gender: {type: mongoose.Schema.ObjectId, ref: ('GendersModel')}
});

var gendersSchema = mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}]
});

var postsSchema = mongoose.Schema(
    {
        title: String,
        body: String,
        comments: [{type: mongoose.Schema.ObjectId, ref: 'CommentsModel'}]
    }
);

var commentSchema = mongoose.Schema(
    {
        timeStamp: Date,
        statement: String,
        post: {type: mongoose.Schema.ObjectId, ref: ('PostsModel')}
    }
);

var StudentsModel = mongoose.model('student', studentsSchema);
var PostsModel = mongoose.model('post', postsSchema);
var CommentsModel = mongoose.model('comment', commentSchema);
var GendersModel = mongoose.model('gender',gendersSchema);

app.get('/students', function (request, response) {
    console.log('/students');
    StudentsModel.find(function (error, students) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({student: students});
        }

    });
});

app.get('/genders', function (request, response) {
    console.log('/genders');
    GendersModel.find(function (error, genders) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({gender: genders});
        }

    });
});

app.get('/posts', function (request, response) {
    console.log('/posts');
    PostsModel.find(function (error, posts) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({post: posts});
        }

    });
});

app.get('/students/:student_id', function (request, response) {
    console.log('/students/:student_id');
    StudentsModel.findById(request.params.student_id, function (error, student) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({student: student});
        }
    });
});

app.get('/genders/:gender_id', function (request, response) {
    console.log('/genders/:gender_id');
    GendersModel.findById(request.params.gender_id, function (error, gender) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({gender: gender});
        }
    });
});

app.get('/posts/:post_id', function (request, response) {
    console.log('/posts/:post_id');
    PostsModel.findById(request.params.post_id, function (error, post) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({post: post});
        }
    });
});

app.post('/students', function (request, response) {
    var student = new StudentsModel({
        number: request.body.student.number,
        firstName: request.body.student.firstName,
        lastName: request.body.student.lastName,
        DOB: request.body.student.DOB,
        gender: request.body.student.gender
    });
    student.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({student: student});
        }
    });
});

app.post('/posts', function (request, response) {
    var post = new PostsModel({
        title: request.body.post.title,
        body: request.body.post.body
    });
    post.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({post: post});
        }
    });
});

app.put('/posts/:post_id', function (request, response) {
    // use our Posts model to find the post we want
    PostsModel.findById(request.params.post_id, function (error, post) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the post info
            post.title = request.body.post.title;
            post.body = request.body.post.body;
            post.comments = request.body.post.comments;

            // save the post
            post.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({post: post});
                }
            });
        }
    });
});

app.put('/students/:student_id', function (request, response) {
    // use our Posts model to find the post we want
    StudentsModel.findById(request.params.student_id, function (error, student) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            student.number = request.body.student.number;
            student.DOB = request.body.student.DOB;
            student.firstName = request.body.student.firstName;
            student.lastName = request.body.student.lastName;
            student.gender = request.body.student.gender;

            // save the student
            student.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({student: student});
                }
            });
        }
    });
});

app.patch('/students/:student_id', function (request, response) {
    // use our students model to find the post we want
    StudentsModel.findById(request.params.student_id, function (error, student) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            student.number = request.body.student.number;
            student.DOB = request.body.student.DOB;
            student.firstName = request.body.student.firstName;
            student.lastName = request.body.student.lastName;
            student.gender = request.body.student.gender;
            
            // save the student
            student.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({student: student});
                }
            });
        }
    });
});

app.patch('/posts/:post_id', function (request, response) {
    // use our Posts model to find the post we want
    PostsModel.findById(request.params.post_id, function (error, post) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the post info
            post.title = request.body.post.title;
            post.body = request.body.post.body;
            post.comments = request.body.post.comments;
            // save the post
            post.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({post: post});
                }
            });
        }
    });
});

app.delete('/posts/:post_id', function (request, response) {

    PostsModel.findById(request.params.post_id, function (error, post) {
        var deleted = post;
        PostsModel.remove({_id: request.params.post_id}, function (error) {
                if (error) response.send(error);
        });
        CommentsModel.find({"post": deleted.id}, function (error, comments){
            if (error) response.send(error);
            comments.forEach(function (comment) {
              comment.remove();
            });
        });
        response.status(200).json({post: deleted});
    });

});

app.delete('/students/:student_id', function (request, response) {

    StudentsModel.findById(request.params.student_id, function (error, student) {
        var deleted = student;
        StudentsModel.remove({_id: request.params.student_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({student: deleted});
    });

});

app.post('/comments', function (request, response) {
    var comment = new CommentsModel(request.body.comment);
    comment.save(function (error) {
        if (error) response.send(error);
        response.status(201).json({comment: comment});
    });
});

//app.put('/comments/:comment_id', function (request, response) {
//    CommentsModel.findById(request.params.comment_id, function (error, comment) {
//        if (error) response.send(error);
//        // update the comment info
//        comment.statement = request.body.comment.statement;
//        // save comment
//        comment.save(function (error) {
//            if (error) response.send(error);
//            response.status(201).json({comment: comment});
//        });
//    });
//});


app.get('/comments', function (request, response) {

    var Post = request.query.post;
    if (!Post) {
        CommentsModel.find(function (error, comments) {
            if (error) response.send(error);
            response.json({comment: comments});
        });
    } else{
        CommentsModel.find({"post": request.query.post}, function (error, comments) {
            if (error) response.send(error);
            response.json({comment: comments});
        });
    }

});



//app.get('/comments/:comment_id', function (request, response) {
//    CommentsModel.findById(request.params.comment_id, function (error, comment) {
//        if (error) response.send(error);
//        response.status(201).json({comment: comment});
//      });
//});

app.listen(3700, function () {
    console.log('Listening on port 3700');
});

