import {Movie} from './movie.model';

// GET /api/movies/  // limited to 50 movies
export const list = async (req,res)=>{
    try{
        const movies = await Movie.find().limit(50);
        if(!movies) return res.status(400).end();
        res.status(200).json({movies:movies});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};
// GET /api/movies/:id
export const getOne = async (req,res)=>{
    try{
        const movie = await Movie.findOne({_id:req.params.id});
        if(!movie) return res.status(400).end();
        res.status(200).json({movies:movie});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};

// PUT /api/movies/:id
export const updateOne = async (req,res) =>{
    try {
        const updatedMovie = await Movie.findOneAndUpdate({
                _id:req.params.id
            },
                req.body,
                {new:true}
        )
        if(!updatedMovie) return res.status(400).end();
        res.status(200).json({movies:updatedMovie});
    } catch(e){
        console.error(e);
        res.status(400).end()
    }
};

// POST /api/movies/
export const create = async (req,res)=>{
    try{
        const movie = await Movie.create({...req.body});
        res.status(201).json({movie});
    }catch(e){
        console.error(e);
        res.status(400).end();
    }
};

// DELETE /api/movies/:id
export const deleteOne = async (req,res) =>{
    try {
        const deletedMovie = await Movie.findByIdAndDelete({
                _id:req.params.id
            })
        if(!deletedMovie) return res.status(400).end();
        res.status(200).json({movies:deletedMovie});
    } catch(e){
        console.error(e);
        res.status(400).end()
    }
};