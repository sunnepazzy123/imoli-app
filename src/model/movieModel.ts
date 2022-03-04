import mongoose, { Schema } from 'mongoose';
import { IMovies }  from '../interfaces/'
import mongoosePaginate from 'mongoose-paginate';


const moviesSchema = new Schema<IMovies>(
    {
        id: {
            type: Number,
            required: true,
            unique: true,       
        },
        name: {
            type: String,
            required: true,
            unique: true,       
        },
        title: {
            type: String,
            required: true,     
        },
        release_date: {
            type: String,
            required: true
        },
        characters: {
            type: [String],
            required: true,
        },
    },
    {
        toJSON: {
            transform(docs, ret){
                delete ret.__v;
                delete ret._id;
            }
        }
    }
);


moviesSchema.plugin(mongoosePaginate);
const MoviesModel = mongoose.model<IMovies>('movies', moviesSchema);


export default MoviesModel;
