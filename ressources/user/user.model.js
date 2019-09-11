import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const usersSchema = new mongoose.Schema({
  email: {type: String, unique : true, required : true},
  username: {type: String, unique : true, required : true},
  password: {type: String, required : true}
});

usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export const User = mongoose.model('user',usersSchema);