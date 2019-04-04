"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    short() {
        return {
            email: this.email
        };
    }
};
tslib_1.__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], User.prototype, "password_hash", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.CreatedAt,
    tslib_1.__metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.UpdatedAt,
    tslib_1.__metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = tslib_1.__decorate([
    sequelize_typescript_1.Table
], User);
exports.User = User;
//# sourceMappingURL=User.js.map