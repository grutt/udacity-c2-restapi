import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed.router';
import { UserRouter } from './user.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;