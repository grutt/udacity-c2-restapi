import { Router, Request, Response } from 'express';

import { FeedItem } from '../models/FeedItem';

import { requireAuth } from './auth.router';

import { s3, feedUrlBucket } from '../../../aws';


const router: Router = Router();


function getSignedUrl( key: string ){
    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: feedUrlBucket,
        Key: key,
        Expires: signedUrlExpireSeconds
      });

    return url;
}

router.get('/', async (req: Request, res: Response) => {
    const items = await FeedItem.findAndCountAll();
    items.rows.map((item) => {
            if(item.url) {
                item.url = getSignedUrl(item.url);
            }
    });
    res.send(items);
});

router.get('/signed-url/:fileName', requireAuth, async (req: Request, res: Response) => {
    let { fileName } = req.params;

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject', {
      Bucket: feedUrlBucket,
      Key: fileName,
      Expires: signedUrlExpireSeconds
    });
    
    console.log(url);
    
    res.status(201).send({url: url});
});

router.post('/', requireAuth, async (req: Request, res: Response) => {
    
    // const items = await FeedItem.findAndCountAll();
    const caption = req.body.caption;
    const fileName = req.body.url;
    
    const item = await new FeedItem({
            caption: caption,
            url: fileName
    });

    const saved_item = await item.save();
    res.status(201).send(saved_item);
});

router.get('/:id', requireAuth, async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await FeedItem.findByPk(id);
    res.send(item);
});

router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await FeedItem.findByPk(id);
    res.status(204).send(item);
});

router.patch('/:id', requireAuth, async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await FeedItem.findByPk(id);
    res.status(201).send(item);
});

export const FeedRouter: Router = router;