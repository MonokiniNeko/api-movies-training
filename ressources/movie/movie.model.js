import mongoose from 'mongoose';

const moviesSchema = new mongoose.Schema({
	fields : {
		directors : [
			{type: String}
		],
		release_date : {type: String},
		rating : {type:Number},
		genres : [
			{type: String}
		],
		image_url : {type: String},
		plot : {type: String},
		title : {type: String},
		rank : {type:Number},
		running_time_secs : {type:Number},
		actors : [
			{type: String}
		],
		year : {type:Number}
	},
	id : {type: String},
    type : {
        type: String,
        default: "add"
        }
});

export const Movie = mongoose.model('movie',moviesSchema)