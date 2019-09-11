import express from 'express';
import {json, urlencoded} from 'body-parser';
import {connect} from './utils/db';

import moviesRouter from './ressources/movie/movie.router';
import moviesSearch from './utils/search';
import usersRouter from './ressources/user/user.router';
const app = express();

app.disable('x-powered-by');

app.use(json());
app.use(urlencoded({extended:true}));

app.use('/api/users',usersRouter);
app.use('/api/movies',moviesRouter);

app.use('/search?',moviesSearch); 

const port = 8001;
const start = async ()=>{
    try {
        await connect();
        app.listen(port, ()=>{
            console.log('REST API listenning on http://localhost:'+port+'/');
        })
    } catch(e){
        throw e
    }
};
start()