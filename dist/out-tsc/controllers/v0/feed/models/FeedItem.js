"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
let FeedItem = class FeedItem extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], FeedItem.prototype, "caption", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], FeedItem.prototype, "url", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.CreatedAt,
    tslib_1.__metadata("design:type", Date)
], FeedItem.prototype, "createdAt", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.UpdatedAt,
    tslib_1.__metadata("design:type", Date)
], FeedItem.prototype, "updatedAt", void 0);
FeedItem = tslib_1.__decorate([
    sequelize_typescript_1.Table
], FeedItem);
exports.FeedItem = FeedItem;
//# sourceMappingURL=FeedItem.js.map