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
    gender: {type: mongoose.Schema.ObjectId, ref: ('GendersModel')},
    studyLoad: {type: mongoose.Schema.ObjectId, ref: ('AcademicLoadsModel')},
    residency: {type: mongoose.Schema.ObjectId, ref: ('ResidenciesModel')},
    country: {type: mongoose.Schema.ObjectId, ref: ('CountriesModel')},
    province: {type: mongoose.Schema.ObjectId, ref: ('ProvincesModel')},
    city: {type: mongoose.Schema.ObjectId, ref: ('CitiesModel')},
    ITRList: [{type: mongoose.Schema.ObjectId, ref: 'ITRProgramsModel'}],
    mark: [{type: mongoose.Schema.ObjectId, ref: 'GradesModel'}]
});

var gendersSchema = mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}]
});

var academicLoadsSchema = mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}]
});

var residenciesSchema = mongoose.Schema({
	name: String,
	students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}]
});

var countriesSchema = mongoose.Schema({
	name: String,
	students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}],
    province: [{type: mongoose.Schema.ObjectId, ref: 'ProvincesModel'}]
});

var provincesSchema = mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}],
    country: {type: mongoose.Schema.ObjectId, ref: ('CountriesModel')},
    city: [{type: mongoose.Schema.ObjectId, ref: 'CitiesModel'}]
});

var citiesSchema = mongoose.Schema({
    name: String,
    students: [{type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}],
    province: {type: mongoose.Schema.ObjectId, ref: ('ProvincesModel')}
});

var itrprogramsSchema = mongoose.Schema({
    order: Number,
    eligibilty: Boolean,
    program: {type: mongoose.Schema.ObjectId, ref: ('AcademicProgramCodesModel')},
    student: {type: mongoose.Schema.ObjectId, ref: 'StudentsModel'}
});

var academicprogramcodesSchema = mongoose.Schema({
    name: String,
    ITR: [{type: mongoose.Schema.ObjectId, ref: ('ITRProgramsModel')}],
    dept: [{type: mongoose.Schema.ObjectId, ref: ('ProgramAdministrationModel')}],
    rule: [{type: mongoose.Schema.ObjectId, ref: ('AdmissionRuleModel')}]
});

var AdmissionRuleSchema = mongoose.Schema({
    description: String,
    testExpression: [{type: mongoose.Schema.ObjectId, ref: ('LogicalExpressionsModel')}],
    acadamicprogramcodes: [{type: mongoose.Schema.ObjectId, ref: ('AcademicProgramCodesModel')}]
});

var ProgramAdministrationSchema = mongoose.Schema({
    name: String,
    position: String,
    acadamicCode: [{type: mongoose.Schema.ObjectId, ref: ('AcademicProgramCodesModel')}],
    dept: [{type: mongoose.Schema.ObjectId, ref: ('DepartmentsModel')}]
});

var departmentsSchema = mongoose.Schema({
    name: String,
    programAdministration: [{type: mongoose.Schema.ObjectId, ref: ('ProgramAdministrationModel')}],
    faculty: {type: mongoose.Schema.ObjectId, ref: ('FacultiesModel')}
});

var facultiesSchema = mongoose.Schema({
    name: String,
    departments: [{type: mongoose.Schema.ObjectId, ref:('DepartmentsModel')}]
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

var gradesSchema = mongoose.Schema({
    mark: String, // maybe change to float or double
    section: String,
    students: {type: mongoose.Schema.ObjectId, ref: ('StudentsModel')},
    courseNo: {type: mongoose.Schema.ObjectId, ref: ('CourseCodesModel')},
    level: {type: mongoose.Schema.ObjectId, ref: ('ProgramRecordsModel')}
});

var courseCodeSchema = mongoose.Schema({
    code: String, 
    number: String,
    name: String,
    unit: String,
    grade: [{type: mongoose.Schema.ObjectId, ref: 'GradesModel'}]
});

var programRecordSchema = mongoose.Schema({
    level: String, 
    status: String,
    comment: String,
    grade: [{type: mongoose.Schema.ObjectId, ref: 'GradesModel'}],
    degreeCode: {type: mongoose.Schema.ObjectId, ref: 'DegreeCodesModel'},
    termCode: {type: mongoose.Schema.ObjectId, ref: 'TermCodesModel'}
});

var degreeCodeSchema = mongoose.Schema({
    name: String,
    programRecord: [{type: mongoose.Schema.ObjectId, ref: 'ProgramRecordsModel'}]
});

var termCodeSchema = mongoose.Schema({
    name: String,
    programRecord: [{type: mongoose.Schema.ObjectId, ref: 'ProgramRecordsModel'}]
});

var logicalExpressionsSchema = mongoose.Schema({
    booleanExp: String,
    logicalLink: String,
    children: [{type: mongoose.Schema.ObjectId, ref: 'LogicalExpressionsModel'}],
    parent: {type: mongoose.Schema.ObjectId, ref: 'LogicalExpressionsModel'},
    admissionRule: {type: mongoose.Schema.ObjectId, ref: 'AdmissionRuleModel'}
});

var StudentsModel = mongoose.model('student', studentsSchema);
var PostsModel = mongoose.model('post', postsSchema);
var CommentsModel = mongoose.model('comment', commentSchema);
var GendersModel = mongoose.model('gender', gendersSchema);
var AcademicLoadsModel = mongoose.model('academic-load', academicLoadsSchema);
var ResidenciesModel = mongoose.model('residency', residenciesSchema);
var CountriesModel = mongoose.model('country', countriesSchema);
var ProvincesModel = mongoose.model('province', provincesSchema);
var CitiesModel = mongoose.model('city', citiesSchema);
var ITRProgramsModel = mongoose.model('itrprogram', itrprogramsSchema);
var AcademicProgramCodesModel = mongoose.model('academicprogramcode', academicprogramcodesSchema);
var DepartmentsModel = mongoose.model('department',departmentsSchema);
var FacultiesModel = mongoose.model('faculty',facultiesSchema);
var GradesModel = mongoose.model('grade', gradesSchema);
var CourseCodesModel = mongoose.model('courseCode', courseCodeSchema);
var ProgramRecordsModel = mongoose.model('programRecord', programRecordSchema);
var DegreeCodesModel = mongoose.model('degreeCode', degreeCodeSchema);
var TermCodesModel = mongoose.model('termCode', termCodeSchema);
var AdmissionRuleModel = mongoose.model('addmissionrule', AdmissionRuleSchema);
var ProgramAdministrationModel = mongoose.model('programadministration', ProgramAdministrationSchema);
var LogicalExpressionsModel = mongoose.model('logicalexpression', logicalExpressionsSchema);

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

app.get('/addmissionrules', function (request, response) {
    console.log('/addmissionrules');
    AdmissionRuleModel.find(function (error, admissionrules) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({addmissionrule: admissionrules});
        }

    });
});

app.get('/programadministrations', function (request, response) {
    console.log('/programadministrations');
    ProgramAdministrationModel.find(function (error, programadministrations) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({programadministration: programadministrations});
        }

    });
});

app.get('/academicLoads', function (request, response) {
    console.log('/academicLoads');
    AcademicLoadsModel.find(function (error, academicLoads) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'academic-load': academicLoads});
        }

    });
});

app.get('/residencies', function (request, response) {
	console.log('/residencies');
	ResidenciesModel.find(function (error, residencies) {
		if (error) {
			response.send({error: error});
		}
		else {
			response.json({residency: residencies})
		}
	});
});

app.get('/countries', function (request, response) {
	console.log('/countries');
	CountriesModel.find(function (error, countries) {
		if (error) {
			response.send({error: error});
		}
		else {
			response.json({country: countries})
		}
	});
});

app.get('/provinces', function (request, response) {
    console.log('/provinces');
    ProvincesModel.find(function (error, provinces) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({province: provinces})
        }
    });
});

app.get('/cities', function (request, response) {
    console.log('/cities');
    CitiesModel.find(function (error, cities) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({city: cities})
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

app.get('/itrprograms', function (request, response) {
    console.log('/itrprograms');
    ITRProgramsModel.find(function (error, itrprograms) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'itrprogram': itrprograms});
        }

    });
});

app.get('/academicprogramcodes', function (request, response) {
    console.log('/academicprogramcodes');
    AcademicProgramCodesModel.find(function (error, academicprogramcodes) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'academicprogramcode': academicprogramcodes});
        }

    });
});

app.get('/departments', function (request, response) {
    console.log('/departments');
    DepartmentsModel.find(function (error, departments) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'department': departments});
        }

    });
});

app.get('/faculties', function (request, response) {
    console.log('/faculties');
    FacultiesModel.find(function (error, faculties) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'faculty': faculties});
        }

    });
});

app.get('/grades', function (request, response) {
    console.log('/grades');
    GradesModel.find(function (error, grades) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'grade': grades});
        }

    });
});

app.get('/courseCodes', function (request, response) {
    console.log('/courseCodes');
    CourseCodesModel.find(function (error, courseCodes) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'courseCode': courseCodes});
        }
    });
});

app.get('/programRecords', function (request, response) {
    console.log('/programRecords');
    ProgramRecordsModel.find(function (error, programRecords) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'programRecord': programRecords});
        }

    });
});

app.get('/degreeCodes', function (request, response) {
    console.log('/degreeCodes');
    DegreeCodesModel.find(function (error, degreeCodes) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'degreeCode': degreeCodes});
        }

    });
});

app.get('/termCodes', function (request, response) {
    console.log('/termCodes');
    TermCodesModel.find(function (error, termCodes) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'termCode': termCodes});
        }

    });
});

app.get('/logicalexpressions', function (request, response) {
    console.log('/logicalexpressions');
    LogicalExpressionsModel.find(function (error, logicalexpressions) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'logicalexpression': logicalexpressions});
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

app.get('/academicLoads/:academicLoad_id', function (request, response) {
    console.log('/academicLoads/:academicLoad_id');
    AcademicLoadsModel.findById(request.params.academicLoad_id, function (error, academicLoad) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'academic-load': academicLoad});
        }
    });
});

app.get('/residencies/:residency_id', function (request, response) {
	console.log('/residencies/:residency_id');
	ResidenciesModel.findById(request.params.residency_id, function (error, residency) {
		if (error) {
			response.send({error: error});
		}
		else {
			response.json({residency: residency});
		}
	});
});


app.get('/countries/:country_id', function (request, response) {
	console.log('/countries/:country_id');
	CountriesModel.findById(request.params.country_id, function (error, country) {
		if (error) {
			response.send({error: error});
		}
		else {
			response.json({country: country});
		}
	});
});

app.get('/provinces/:province_id', function (request, response) {
    console.log('/provinces/:province_id');
    ProvincesModel.findById(request.params.province_id, function (error, province) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({province: province});
        }
    });
});

app.get('/cities/:city_id', function (request, response) {
    console.log('/cities/:city_id');
    CitiesModel.findById(request.params.city_id, function (error, city) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({city: city});
        }
    });
});

app.get('/itrprograms/:itrprogram_id', function (request, response) {
    console.log('/itrprograms/:itrprogram_id');
    ITRProgramsModel.findById(request.params.itrprogram_id, function (error, itrprogram) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'itrprogram': itrprogram});
        }
    });
});

app.get('/academicprogramcodes/:academicprogramcode_id', function (request, response) {
    console.log('/academicprogramcodes/:academicprogramcode_id');
    AcademicProgramCodesModel.findById(request.params.academicprogramcode_id, function (error, academicprogramcode) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'academicprogramcode': academicprogramcode});
        }
    });
});

app.get('/faculties/:faculty_id', function (request, response) {
    console.log('/faculties/:faculty_id');
    FacultiesModel.findById(request.params.faculty_id, function (error, faculty) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'faculty': faculty});
        }
    });
});

app.get('/departments/:department_id', function (request, response) {
    console.log('/departments/:department_id');
    DepartmentsModel.findById(request.params.department_id, function (error, department) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'department': department});
        }
    });
});

app.get('/logicalexpressions/:logicalexpression_id', function (request, response) {
    console.log('/logicalexpressions/:logicalexpression_id');
    LogicalExpressionsModel.findById(request.params.logicalexpression_id, function (error, logicalexpression) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'logicalexpression': logicalexpression});
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

app.get('/grades/:grade_id', function (request, response) {
    console.log('/grades/:grade_id');
    GradesModel.findById(request.params.grade_id, function (error, grade) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'grade': grade});
        }
    });
});

app.get('/courseCodes/:courseCode_id', function (request, response) {
    console.log('/courseCodes/:courseCode_id');
    CourseCodesModel.findById(request.params.courseCode_id, function (error, courseCode) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'courseCode': courseCode});
        }
    });
});

app.get('/programRecords/:programRecord_id', function (request, response) {
    console.log('/programRecords/:programRecord_id');
    ProgramRecordsModel.findById(request.params.programRecord_id, function (error, programRecord) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'programRecord': programRecord});
        }
    });
});

app.get('/degreeCodes/:degreeCode_id', function (request, response) {
    console.log('/degreeCodes/:degreeCode_id');
    DegreeCodesModel.findById(request.params.degreeCode_id, function (error, degreeCode) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'degreeCode': degreeCode});
        }
    });
});

app.get('/termCodes/:termCode_id', function (request, response) {
    console.log('/termCodes/:termCode_id');
    TermCodesModel.findById(request.params.termCode_id, function (error, termCode) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.json({'termCode': termCode});
        }
    });
});

app.post('/students', function (request, response) {
    var student = new StudentsModel({
        number: request.body.student.number,
        firstName: request.body.student.firstName,
        lastName: request.body.student.lastName,
        DOB: request.body.student.DOB,
        gender: request.body.student.gender,
        studyLoad: request.body.student.studyLoad,
        residency: request.body.student.residency,
        country: request.body.student.country,
        province: request.body.student.province,
        city: request.body.student.city,
        mark: request.body.student.mark,
        ITRList: request.body.student.ITRList
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

app.post('/genders', function (request, response) {
    var gender = new GendersModel(request.body.gender);
    gender.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({gender: gender});
        }
    });
});

app.post('/academicLoads', function (request, response) {
    var academicLoad = new AcademicLoadsModel(request.body.academicLoad);
    academicLoad.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'academic-load': academicLoad});
        }
    });
});

app.post('/residencies', function (request, response) {
    var residency = new ResidenciesModel(request.body.residency);
    residency.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({residency: residency});
        }
    });
});

app.post('/countries', function (request, response) {
    var country = new CountriesModel(request.body.country);
    country.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({country: country});
        }
    });
});

app.post('/provinces', function (request, response) {
    var province = new ProvincesModel(request.body.province);
    province.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({province: province});
        }
    });
});

app.post('/cities', function (request, response) {
    var city = new CitiesModel(request.body.city);
    city.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({city: city});
        }
    });
});

app.post('/itrprograms', function (request, response) {
    var itrprogram = new ITRProgramsModel(request.body.itrprogram);
    itrprogram.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'itrprogram': itrprogram});
        }
    });
});

app.post('/departments', function (request, response) {
    var department = new DepartmentsModel(request.body.department);
    department.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'department': department});
        }
    });
});

app.post('/faculties', function (request, response) {
    var faculty = new FacultiesModel(request.body.faculty);
    faculty.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'faculty': faculty});
        }
    });
});

app.post('/academicprogramcodes', function (request, response) {
    var academicprogramcode = new AcademicProgramCodesModel(request.body.academicprogramcode);
    academicprogramcode.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'academicprogramcode': academicprogramcode});
        }
    });
});

app.post('/programadministration', function (request, response) {
    var programadministration = new ProgramAdministrationModel(request.body.programadministration);
    programadministration.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'programadministration': programadministration});
        }
    });
});

app.post('/logicalexpressions', function (request, response) {
    var logicalexpression = new LogicalExpressionsModel(request.body.logicalexpression);
    logicalexpression.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'logicalexpression': logicalexpression});
        }
    });
});

app.post('/addmissionrule', function (request, response) {
    var addmissionrule = new AddmissionRuleModel(request.body.addmissionrule);
    addmissionrule.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'addmissionrule': addmissionrule});
        }
    });
});

app.post('/grades', function (request, response) {
    var grade = new GradesModel(request.body.grade);
    grade.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'grade': grade});
        }
    });
});

app.post('/courseCodes', function (request, response) {
    var courseCode = new CourseCodesModel(request.body.courseCode);
    courseCode.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'courseCode': courseCode});
        }
    });
});

app.post('/programRecords', function (request, response) {
    var programRecord = new ProgramRecordsModel(request.body.programRecord);
    programRecord.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'programRecord': programRecord});
        }
    });
});

app.post('/degreeCodes', function (request, response) {
    var degreeCode = new DegreeCodesModel(request.body.degreeCode);
    degreeCode.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'degreeCode': degreeCode});
        }
    });
});

app.post('/termCodes', function (request, response) {
    var termCode = new TermCodesModel(request.body.termCode);
    termCode.save(function (error) {
        if (error) {
            response.send({error: error});
        }
        else {
            response.status(201).json({'termCode': termCode});
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
            student.studyLoad = request.body.student.studyLoad;
            student.residency = request.body.student.residency;
            student.country = request.body.student.country;
            student.province = request.body.student.province;
            student.city = request.body.student.city;
            student.grade = request.body.student.grade;
            student.ITRList = request.body.student.ITRList;
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

app.put('/genders/:gender_id', function (request, response) {
    // use our Posts model to find the post we want
    GendersModel.findById(request.params.gender_id, function (error, gender) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            gender.name = request.body.gender.number;
            gender.students = request.body.gender.students;

            // save the student
            gender.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({gender: gender});
                }
            });
        }
    });
});

app.put('/academicLoads/:academicLoad_id', function (request, response) {
    // use our Posts model to find the post we want
    AcademicLoadsModel.findById(request.params.academicLoad_id, function (error, academicLoad) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            academicLoad.name = request.body.academicLoad.number;
            academicLoad.students = request.body.academicLoad.students;

            // save the student
            academicLoad.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'academic-load': academicLoad});
                }
            });
        }
    });
});

app.put('/residencies/:residency_id', function (request, response) {
    // use our Posts model to find the post we want
    ResidenciesModel.findById(request.params.residency_id, function (error, residency) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            residency.name = request.body.residency.number;
            residency.students = request.body.residency.students;

            // save the student
            residency.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({residency: residency});
                }
            });
        }
    });
});

app.put('/countries/:country_id', function (request, response) {
    // use our Posts model to find the post we want
    CountriesModel.findById(request.params.country_id, function (error, country) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            country.name = request.body.country.number;
            country.students = request.body.country.students;
            country.province = request.body.country.province;

            // save the student
            country.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({country: country});
                }
            });
        }
    });
});

app.put('/provinces/:province_id', function (request, response) {
    // use our Posts model to find the post we want
    ProvincesModel.findById(request.params.province_id, function (error, province) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            province.name = request.body.province.number;
            province.students = request.body.province.students;
            province.country = request.body.province.country;
            province.city = request.body.province.city;

            // save the student
            province.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({province: province});
                }
            });
        }
    });
});

app.put('/cities/:city_id', function (request, response) {
    // use our Posts model to find the post we want
    CitiesModel.findById(request.params.city_id, function (error, city) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            city.name = request.body.city.number;
            city.students = request.body.city.students;
            city.province = request.body.city.province;

            // save the student
            city.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({city: city});
                }
            });
        }
    });
});

app.put('/itrprograms/:itrprogram_id', function (request, response) {
    // use our Posts model to find the post we want
    ITRProgramsModel.findById(request.params.itrprogram_id, function (error, itrprogram) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            itrprogram.order = request.body.itrprogram.order;
            itrprogram.eligibility = request.body.itrprogram.eligibility;
            itrprogram.program = request.body.itrprogram.program;
            itrprogram.students = request.body.itrprogram.students;
            itrprogram.rule = request.body.itrprogram.rule;

            // save the student
            itrprogram.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'itrprogram': itrprogram});
                }
            });
        }
    });
});

app.put('/academicprogramcodes/:academicprogramcodes_id', function (request, response) {
    // use our Posts model to find the post we want
    AcademicProgramCodesModel.findById(request.params.academicprogramcodes_id, function (error, academicprogramcode) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            academicprogramcode.name = request.body.academicprogramcode.name;
            academicprogramcode.ITR = request.body.academicprogramcode.ITR;
            academicprogramcode.dept = request.body.academicprogramcode.dept;
            academicprogramcode.rule = request.body.academicprogramcode.rule;

            // save the student
            academicprogramcode.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'academicprogramcode': academicprogramcode});
                }
            });
        }
    });
});

app.put('/programadministration/:programadministration_id', function (request, response) {
    // use our Posts model to find the post we want
    ProgramAdministrationModel.findById(request.params.programadministration_id, function (error, programadministration) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            programadministration.name = request.body.programadministration.name;
            programadministration.position = request.body.programadministration.position;
            programadministration.dept = request.body.programadministration.dept;
            programadministration.acadamicProgramcodes = request.body.programadministration.acadamicProgramcodes;

            // save the student
            programadministration.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'programadministration': programadministration});
                }
            });
        }
    });
});

app.put('/admissionrule/:admissionrule_id', function (request, response) {
    // use our Posts model to find the post we want
    AdmissionRuleModel.findById(request.params.admissionrule_id, function (error, admissionrule) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            admissionrule.description = request.body.admissionrule.description;
            admissionrule.testExpression = request.body.admissionrule.testExpression;
            admissionrule.acadamicCode = request.body.admissionrule.acadamicCode;

            // save the student
            admissionrule.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'admissionrule': admissionrule});
                }
            });
        }
    });
});

app.put('/departments/department_id:', function (request, response) {
    // use our Posts model to find the post we want
    DepartmentsModel.findById(request.params.department_id, function (error, department) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            department.name = request.body.department.name;
            department.programAdministration = request.body.department.programAdministration;
            department.faculty = request.body.department.faculty;

            // save the student
            department.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'department': department});
                }
            });
        }
    });
});

app.put('/faculties/:faculty_id', function (request, response) {
    // use our Posts model to find the post we want
    FacultiesModel.findById(request.params.faculty_id, function (error, faculty) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            faculty.name = request.body.faculty.name;
            faculty.department = request.body.faculty.department;

            // save the student
            faculty.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'faculty': faculty});
                }
            });
        }
    });
});

app.put('/logicalexpressions/:logicalexpression_id', function (request, response) {
    // use our Posts model to find the post we want
    LogicalExpressionsModel.findById(request.params.logicalexpression_id, function (error, logicalexpression) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            logicalexpression.booleanExp = request.body.logicalexpression.booleanExp;
            logicalexpression.logicalLink = request.body.logicalexpression.logicalLink;
            logicalexpression.children = request.body.logicalexpression.children;
            logicalexpression.parent = request.body.logicalexpression.parent;
            logicalexpression.admissionRule = request.body.logicalexpression.admissionRule;

            // save the student
            logicalexpression.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'logicalexpression': logicalexpression});
                }
            });
        }
    });
});

app.put('/grades/:grade_id', function (request, response) {
    // use our Posts model to find the post we want
    GradesModel.findById(request.params.grade_id, function (error, grade) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            grade.mark = request.body.grade.mark;
            grade.section = request.body.grade.section;
            grade.students = request.body.grade.students;
            grade.courseCode = request.body.grade.courseCode;
            grade.programRecord = request.body.grade.programRecord;

            // save the student
            grade.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'grade': grade});
                }
            });
        }
    });
});

app.put('/courseCodes/:courseCode_id', function (request, response) {
    // use our Posts model to find the post we want
    CourseCodesModel.findById(request.params.courseCode_id, function (error, courseCode) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            courseCode.code = request.body.courseCode.code;
            courseCode.number = request.body.courseCode.number;
            courseCode.name = request.body.courseCode.name;
            courseCode.unit = request.body.courseCode.unit;
            courseCode.grade = request.body.courseCode.grade;

            // save the student
            courseCode.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'courseCode': courseCode});
                }
            });
        }
    });
});

app.put('/programRecords/:programRecord_id', function (request, response) {
    // use our Posts model to find the post we want
    ProgramRecordsModel.findById(request.params.programRecord_id, function (error, programRecord) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            programRecord.level = request.body.programRecord.level;
            programRecord.status = request.body.programRecord.status;
            programRecord.comment = request.body.programRecord.comment;
            programRecord.grade = request.body.programRecord.grade;
            programRecord.degreeCode = request.body.programRecord.degreeCode;
            programRecord.termCode = request.body.programRecord.termCode;

            // save the student
            programRecord.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'programRecord': programRecord});
                }
            });
        }
    });
});

app.put('/degreeCodes/:degreeCode_id', function (request, response) {
    // use our Posts model to find the post we want
    DegreeCodeModel.findById(request.params.degreeCode_id, function (error, degreeCode) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            degreeCode.name = request.body.degreeCode.name;
            degreeCode.programRecord = request.body.degreeCode.programRecord;

            // save the student
            degreeCode.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'degreeCode': degreeCode});
                }
            });
        }
    });
});

app.put('/termCodes/:termCode_id', function (request, response) {
    // use our Posts model to find the post we want
    TermCodeModel.findById(request.params.termCode_id, function (error, termCode) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            termCode.name = request.body.termCode.name;
            termCode.programRecord = request.body.termCode.programRecord;

            // save the student
            degreeCode.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({'termCode': termCode});
                }
            });
        }
    });
});

/*app.patch('/students/:student_id', function (request, response) {
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
            student.studyLoad = request.body.student.studyLoad;
            student.residency = request.body.student.residency;
            student.country = request.body.student.country;
            student.province = request.body.student.province;
            student.city = request.body.student.city;
            student.mark = request.body.student.mark;
            student.ITRList = request.body.student.ITRList;
            
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

app.patch('/genders/:gender_id', function (request, response) {
    // use our students model to find the post we want
    GendersModel.findById(request.params.gender_id, function (error, gender) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            gender.name = request.body.gender.name;
            gender.students = request.body.gender.students;
            
            // save the student
            gender.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({gender: gender});
                }
            });
        }
    });
});

app.patch('/itrprograms/:itrprogram_id', function (request, response) {
    // use our students model to find the post we want
    ITRProgramsModel.findById(request.params.itrprogram_id, function (error, itrprogram) {
        if (error) {
            response.send({error: error});
        }
        else {
            // update the student info
            itrprogram.order = request.body.itrprogram.order;
            itrprogram.eligibility = request.body.itrprogram.eligibility;
            itrprogram.student = request.body.itrprogram.student;
            itrprogram.program = request.body.itrprogram.program;
            itrprogram.rule = request.body.itrprogram.rule;
            
            // save the student
            itrprogram.save(function (error) {
                if (error) {
                    response.send({error: error});
                }
                else {
                    response.status(201).json({itrprogram: itrprogram});
                }
            });
        }
    });
});*/

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

app.delete('/faculties/:faculty_id', function (request, response) {

    FacultiesModel.findById(request.params.faculty_id, function (error, faculty) {
        var deleted = faculty;
        FacultiesModel.remove({_id: request.params.faculty_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({faculty: deleted});
    });

});

app.delete('/departments/:department_id', function (request, response) {

    DepartmentsModel.findById(request.params.department_id, function (error, department) {
        var deleted = department;
        DepartmentsModel.remove({_id: request.params.department_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({department: deleted});
    });

});

app.delete('/courseCodes/:courseCode_id', function (request, response) {

    CourseCodesModel.findById(request.params.courseCode_id, function (error, courseCode) {
        var deleted = courseCode;
        CourseCodesModel.remove({_id: request.params.courseCode_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({courseCode: deleted});
	});
});


app.delete('/academicprogramcodes/:academicprogramcodes_id', function (request, response) {

    AcademicProgramCodesModel.findById(request.params.academicprogramcodes_id, function (error, academicprogramcode) {
        var deleted = academicprogramcode;
        AcademicProgramCodesModel.remove({_id: request.params.academicprogramcodes_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({acdemicprogramcode: deleted});
	});
});

app.delete('/logicalexpressions/:logicalexpression_id', function (request, response) {

    LogicalExpressionsModel.findById(request.params.logicalexpression_id, function (error, logicalexpression) {
        var deleted = logicalexpression;
        LogicalExpressionsModel.remove({_id: request.params.logicalexpression_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({logicalexpression: deleted});
    });

});

app.delete('/grades/:grade_id', function (request, response) {

    GradesModel.findById(request.params.grade_id, function (error, grade) {
        var deleted = grade;
        GradesModel.remove({_id: request.params.grade_id}, function (error) {
                if (error) response.send(error);
        });
        response.status(200).json({grade: deleted});
    });

});

app.delete('/programRecords/:programRecord_id', function (request, response) {
    ProgramRecordsModel.findById(request.params.programRecord_id, function (error, programRecord) {
        var deleted = programRecord;
        ProgramRecordsModel.remove({_id: request.params.programRecord_id}, function (error) {
            if (error) response.send(error);
        });
        response.status(200).json({faculty: deleted});
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