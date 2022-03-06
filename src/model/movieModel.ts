import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

interface IPaginate {
    doc: IMovieDoc[];
    total: number;
    limit: number;
    page: number;
    pages: number;
}

interface IMovieModel extends mongoose.Model<IMovieDoc, IPaginate> {
    paginate(arr: {}, arr2: any): IPaginate;
}

interface IMovieDoc extends mongoose.Document {
    id: number;
    name: string;
    title: string;
    release_date: string;
    characters: string;
}


const moviesSchema = new Schema(
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
const MoviesModel = mongoose.model<IMovieDoc, IMovieModel>('movies', moviesSchema);

export default MoviesModel;
