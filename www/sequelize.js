"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
// import { FeedItem } from './controllers/v0/models'
const sq = new sequelize_typescript_1.Sequelize({
    database: 'database_dev',
    dialect: 'postgres',
    username: '',
    password: '',
    storage: ':memory:',
    modelPaths: [__dirname + '/controllers/v0/models']
});
// sq.addModels([]);
exports.sequelize = sq;
//# sourceMappingURL=sequelize.js.map