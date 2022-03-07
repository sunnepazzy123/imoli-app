import { Request, Response } from "express"
import { Films } from "../api";
import { jsonToExcelConverter } from "../utils/jsonToExcel";
import MoviesModel from "../model/movieModel";
import { ICsvTable, IMovies } from "../interfaces";

export const get = async(req: Request, res: Response)=>{
       const options = {
                page: +req.query.page || 1,
                limit: +req.query.limit || 10,
            };
       const movies = await MoviesModel.paginate({}, options);
       return res.status(200).json(movies);
}

export const getId = async(req: Request, res: Response)=>{
    const id = +req.params.id;    
    const movie = await MoviesModel.findOne({id: id});
    return res.status(200).json({doc: movie});
}


export const getIdFile = async(req: Request, res: Response)=>{
    const id = +req.params.id;   
    const movie = await MoviesModel.findOne({id: id});
    const payload = {
            id: movie.id,
            name: movie.name,
            release_date: movie.release_date,
            characters: movie.characters[0]
        } as ICsvTable
    await jsonToExcelConverter([payload])
    return res.status(200).json({doc: movie});
}


export const post = async(req: Request, res: Response)=>{
    const { id, name} = req.body as Partial<IMovies>          
    const film = await Films.getId(id);
          film['id'] = id;
          film['name'] = name;
    const newMovie = await MoviesModel.create(film);
    return res.status(201).json({doc: newMovie});
}