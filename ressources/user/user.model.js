import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const usersSchema = new mongoose.Schema({
  email: {type: String, unique : true, required : true},
  username: {type: String, unique : true, required : true},
  password: {type: String, required : true}
});
// METHOD TO ENCRYPT PASSWORD
usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// METHOD TO VERIFY A PASSWORD
usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export const User = mongoose.model('user',usersSchema);