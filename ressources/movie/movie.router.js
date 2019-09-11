import {Router} from 'express';
import {list, create, getOne, updateOne, deleteOne} from './movie.controller';
import {verifyToken, verify} from '../../utils/tokens'
const router = Router();


// /api/movies/
router
    .route('/')
    .get(list)
    .post(verifyToken,verify,create);

//  /api/movies/:id
router
    .route('/:id')
    .get(getOne)
    .put(updateOne)
    .delete(verifyToken,verify,deleteOne);


export default router;