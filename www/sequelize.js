"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./config/config");
const c = config_1.config.dev;
// Instantiate new Sequelize instance!
exports.sequelize = new sequelize_typescript_1.Sequelize({
    "username": c.username,
    "password": c.password,
    "database": c.database,
    "host": c.host,
    dialect: 'postgres',
    storage: ':memory:',
    modelPaths: [
        __dirname + '/controllers/v0/feed/models/',
        __dirname + '/controllers/v0/users/models/',
    ]
});
//# sourceMappingURL=sequelize.js.map