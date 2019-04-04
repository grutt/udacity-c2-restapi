"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const sequelize_1 = require("./sequelize");
const index_router_1 = require("./controllers/v0/index.router");
const body_parser_1 = require("body-parser");
(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
    yield sequelize_1.sequelize;
    const app = express_1.default();
    const port = 8080; // default port to listen
    app.use(body_parser_1.default.json());
    //VERY BAD
    app.use(function (req, res, next) {
        // res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Origin", "http://localhost:8100");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        next();
    });
    app.use('/api/v0/', index_router_1.IndexRouter);
    // Root URI call
    app.get("/", (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        res.send("/api/v0/");
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running http://localhost:${port}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map