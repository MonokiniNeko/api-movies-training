import {User} from './user.model';
import {createUser, authUser} from '../../utils/createAuthUser';
import jwt from 'jsonwebtoken'

// GET /api/users/  // limited to 50 users
export const list = async (req,res)=>{
    try{
        const users = await User.find().limit(50);
        if(!users) return res.status(400).end();
        res.status(200).json({users:users});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};
// GET /api/users/:id
export const getOne = async (req,res)=>{
    try{
        const user = await User.findOne({_id:req.params.id});
        if(!user) return res.status(400).end();
        res.status(200).json({users:user});
    } catch(e){
        console.error(e)
        res.status(400).end()
    }
};

// PUT /api/users/:id
export const updateOne = async (req,res) =>{
    try {
        const updatedUser = await User.findOneAndUpdate({
                _id:req.params.id
            },
                req.body,
                {new:true}
        )
        if(!updatedUser) return res.status(400).end();
        res.status(200).json({users:updatedUser});
    } catch(e){
        console.error(e);
        res.status(400).end()
    }
};

// POST /api/users/
export const create = async (req,res)=>{
    createUser(req,res)
};
// POST /api/users/login/
export const login = async (req,res)=>{
    if(authUser(req,res)) {
        jwt.sign({
            email : req.body.email, 
            username : req.body.username
        }, 
            'secretkey', { expiresIn: '120s' }, 
            (err, token) => {
                if(err) console.error(err)
                res.status(200).json({token});
            });
    } else {
        res.status(400).end();
    }
}

// DELETE /api/users/:id
export const deleteOne = async (req,res) =>{
    try {
        const deletedUser = await User.findByIdAndDelete({
                _id:req.params.id
            })
        if(!deletedUser) return res.status(400).end();
        res.status(200).json({users:deletedUser});
    } catch(e){
        console.error(e);
        res.status(400).end()
    }
};