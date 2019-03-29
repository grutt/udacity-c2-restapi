import { Router, Request, Response } from 'express';

import { User } from '../models/User';

import { s3, feedUrlBucket } from '../../../aws';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { NextFunction } from 'connect';

const router: Router = Router();

function generatePassword(plainTextPassword: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.genSalt(saltRounds, (err , salt) => {
        return bcrypt.hash(plainTextPassword, salt, (err, hash) => {
            return hash;
        });
    });
}

function comparePasswords(plainTextPassword: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plainTextPassword, hash, (err, res) => {
        return res;
    });
}

function generateJWT(user: User): string {
    return jwt.sign(user.short(), "hello")
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
    if (!req.headers || !req.headers.authorization){
        return res.status(401).send({ message: 'No authorization headers.' });
    }
    

    const token_bearer = req.headers.authorization.split(' ');
    if(token_bearer.length != 2){
        return res.status(401).send({ message: 'Malformed token.' });
    }
    
    const token = token_bearer[1];

    return jwt.verify(token, "hello", (err, decoded) => {
      if (err) {
        return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
      }
      return next();
    });
}

router.get('/verification', 
    requireAuth, 
    async (req: Request, res: Response) => {
        return res.status(200).send({ auth: true, message: 'Authenticated.' });
});

router.post('/login', async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    // check email and pass are valid

    const user = await User.findByPk(email);
    // check that user exists
    if(user === undefined) { return; }

    // check that the password matches
    const authValid = await comparePasswords(password, user.password_hash)

    // Generate JWT
    const jwt = generateJWT(user);

    res.status(201).send(jwt);
});

//register a new user
router.post('/', async (req: Request, res: Response) => {
    const email = <string> req.body.email;
    const plainTextPassword = <string> req.body.password;
    
    // check email and pass are valid


    // find the user
    const user = await User.findByPk(email);
    // check that user doesnt exists

    const password_hash = await generatePassword(plainTextPassword);

    const newUser = await new User({
        email: email,
        password_hash: password_hash
    });
    
    let savedUser;
    try {
        savedUser = await newUser.save();
    } catch (e) {
        console.warn(e)
        throw e;
    }

    // Generate JWT
    const jwt = generateJWT(savedUser);

    res.status(201).send(jwt);
});

router.get('/', async (req: Request, res: Response) => {
    res.send('auth')
});

export const AuthRouter: Router = router;