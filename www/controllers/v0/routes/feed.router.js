"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FeedItem_1 = require("../models/FeedItem");
const router = express_1.Router();
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const items = yield FeedItem_1.FeedItem.findAndCountAll();
    res.send(items);
}));
router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    // const items = await FeedItem.findAndCountAll();
    const item = yield new FeedItem_1.FeedItem({ caption: 'hello' + Math.random() });
    const saved_item = yield item.save();
    res.status(201).send(saved_item);
}));
router.get('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    const item = yield FeedItem_1.FeedItem.findByPk(id);
    res.send(item);
}));
router.delete('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    const item = yield FeedItem_1.FeedItem.findByPk(id);
    res.status(204).send(item);
}));
router.patch('/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    const item = yield FeedItem_1.FeedItem.findByPk(id);
    res.status(201).send(item);
}));
exports.FeedRouter = router;
//# sourceMappingURL=feed.router.js.map