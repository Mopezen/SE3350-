var mongoose = require('mongoose');

var usersSchema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        enabled: Boolean,
        userShadow: {type: mongoose.Schema.ObjectId, ref: ('PasswordsModel')},
        userRoles: [{type: mongoose.Schema.ObjectId, ref: 'UserRoleModel'}]
    }
);
var passwordSchema = mongoose.Schema(
    {
        userName: String,
        salt: String,
        encryptedPassword: String,
        userAccountExpiryDate: Date,
        passwordMustChanged : Boolean,
        passwordReset: Boolean,
        user: {type: mongoose.Schema.ObjectId, ref: ('UsersModel')}
    }
);
var loginSchema = mongoose.Schema(
    {
        userName: String,
        password: String,
        nonce: String,
        response: String,
        token: String,
        requestType: String,
        wrongUserName: Boolean,
        wrongPassword: Boolean,
        passwordMustChanged: Boolean,
        passwordReset: Boolean,
        loginFailed: Boolean,
        sessionIsActive: Boolean
    }
);
var rootSchema = mongoose.Schema(
    {
        password: String,
        nonce: String,
        response: String,
        wrongPassword: Boolean,
        sessionIsActive: Boolean
    }
);
var userRoleSchema = mongoose.Schema(
    {
        dateAssigned: Date,
        user: {type: mongoose.Schema.ObjectId, ref: ('UsersModel')},
        role: {type: mongoose.Schema.ObjectId, ref: ('RoleCodeModel')}
    }
);
var roleCodeSchema = mongoose.Schema(
    {
        name: String,
        userRoles: [{type: mongoose.Schema.ObjectId, ref: 'UserRoleModel'}],
        features: [{type: mongoose.Schema.ObjectId, ref: 'RolePermissionModel'}]
    }
);
var rolePermissionSchema = mongoose.Schema(
    {
        code: String,
        sysFeature: String,
        roleCodes: [{type: mongoose.Schema.ObjectId, ref: ('RoleCodeModel')}]
    }
);

var Users = mongoose.model('user', usersSchema);
var Passwords = mongoose.model('password', passwordSchema);
var UserRoles = mongoose.model('userRole', userRoleSchema);
var RoleCodes = mongoose.model('roleCode', roleCodeSchema);
var RolePermissions = mongoose.model('rolePermission', rolePermissionSchema);
var Logins = mongoose.model('login', loginSchema);
var Roots = mongoose.model('root', rootSchema);

mongoose.connect('mongodb://SE3350:ouda@ds059115.mongolab.com:59115/se3350');

exports.Users = Users;
exports.Passwords = Passwords;
exports.UserRoles = UserRoles;
exports.RoleCodes = RoleCodes;
exports.RolePermissions = RolePermissions;;
exports.Logins = Logins;
exports.Roots = Roots;
