"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const User_1 = require("../models/User");
const auth_router_1 = require("./auth.router");
const router = express_1.Router();
router.use('/auth', auth_router_1.AuthRouter);
router.get('/', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
}));
router.get('/:id', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    const item = yield User_1.User.findByPk(id);
    res.send(item);
}));
exports.UserRouter = router;
//# sourceMappingURL=user.router.js.map