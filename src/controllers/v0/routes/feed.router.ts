import { Router, Request, Response } from 'express';

import { FeedItem } from '../models/FeedItem';


const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const items = await FeedItem.findAndCountAll();
    res.send(items);
});

router.post('/', async (req: Request, res: Response) => {
    // const items = await FeedItem.findAndCountAll();
    const item = await new FeedItem({caption: 'hello'+Math.random()});
    const saved_item = await item.save();
    res.status(201).send(saved_item);
});

router.get('/:id', async (req: Request, res: Response) => {
    let { id } = req.params;
    const item = await FeedItem.findByPk(id);
    res.send(item);
});

export const FeedRouter: Router = router;