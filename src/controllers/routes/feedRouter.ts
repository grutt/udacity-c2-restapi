// import { Router, Request, Response } from 'express';

// import { FeedItem } from '../models';

// const router: Router = Router();

// router.get('/', async (req: Request, res: Response) => {
//     const items = await FeedItem.findAndCountAll();
    
//     res.send(items);
// });

// router.get('/:name', (req: Request, res: Response) => {
//     let { name } = req.params;

//     res.send(`Hello, ${name}!`);
// });

// export const FeedRouter: Router = router;