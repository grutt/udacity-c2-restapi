"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const FeedItem_1 = require("../models/FeedItem");
const auth_router_1 = require("../../users/routes/auth.router");
const AWS = require("../../../../aws");
const router = express_1.Router();
// Get all feed items
router.get('/', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const items = yield FeedItem_1.FeedItem.findAndCountAll({ order: [['id', 'DESC']] });
    items.rows.map((item) => {
        if (item.url) {
            item.url = AWS.getGetSignedUrl(item.url);
        }
    });
    res.send(items);
}));
// Get a specific resource
router.get('/:id', (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    let { id } = req.params;
    const item = yield FeedItem_1.FeedItem.findByPk(id);
    res.send(item);
}));
// update a specific resource
router.patch('/:id', auth_router_1.requireAuth, (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    //@TODO try it yourself
    res.send(500).send("not implemented");
}));
// Get a signed url to put a new item in the bucket
router.get('/signed-url/:fileName', auth_router_1.requireAuth, (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    let { fileName } = req.params;
    const url = AWS.getPutSignedUrl(fileName);
    res.status(201).send({ url: url });
}));
// Post meta data and the filename after a file is uploaded 
// NOTE the file name is they key name in the s3 bucket.
// body : {caption: string, fileName: string};
router.post('/', auth_router_1.requireAuth, (req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const caption = req.body.caption;
    const fileName = req.body.url;
    // check Caption is valid
    if (!caption) {
        return res.status(400).send({ message: 'Caption is required or malformed' });
    }
    // check Filename is valid
    if (!fileName) {
        return res.status(400).send({ message: 'File url is required' });
    }
    const item = yield new FeedItem_1.FeedItem({
        caption: caption,
        url: fileName
    });
    const saved_item = yield item.save();
    saved_item.url = AWS.getGetSignedUrl(saved_item.url);
    res.status(201).send(saved_item);
}));
exports.FeedRouter = router;
//# sourceMappingURL=feed.router.js.map