import {Router} from 'express';
import {list, create, login, getOne, updateOne, deleteOne} from './user.controller';
import {verifyToken, verify} from '../../utils/tokens'
const router = Router();

router
    .route('/login')
    .post(login)

// /api/users/
router
    .route('/')
    .get(list)
    .post(verifyToken,verify,create);

//  /api/users/:id
router
    .route('/:id')
    .get(getOne)
    .put(verifyToken,verify,updateOne)
    .delete(verifyToken,verify,deleteOne);


export default router;