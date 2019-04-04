"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
var config = require('./config/config.json');
config = config.dev;
// Instantiate new Sequelize instance!
exports.sequelize = new sequelize_typescript_1.Sequelize({
    "username": config.username,
    "password": config.password,
    "database": config.database,
    "host": config.host,
    dialect: 'postgres',
    storage: ':memory:',
    modelPaths: [
        __dirname + '/controllers/v0/feed/models/',
        __dirname + '/controllers/v0/users/models/',
    ]
});
//# sourceMappingURL=sequelize.js.map