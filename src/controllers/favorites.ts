import { Request, Response } from "express"
import { Movies } from "../api";
import { jsonToExcelConverter } from "../utils/jsonToExcel";
import MoviesModel from "../model/movieModel";
import { ICsvTable, IMovies } from "../interfaces";


export const get = async(req: Request, res: Response)=>{
    try {   
        const options = {
            page: +req.query.page || 1,
            limit: +req.query.limit || 10,
          };
          //@ts-ignore
        const result = await MoviesModel.paginate({}, options);
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}

export const getId = async(req: Request, res: Response)=>{
    const id = +req.params.id;
    try {      
        const result = await MoviesModel.findOne({id: id});
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}


export const getIdFile = async(req: Request, res: Response)=>{
    const id = +req.params.id;
    try {      
        const result = await MoviesModel.findOne({id: id});
        const payload = {
            id: result.id,
            name: result.name,
            release_date: result.release_date,
            characters: result.characters[0]
        } as ICsvTable
        await jsonToExcelConverter([payload])
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}


export const post = async(req: Request, res: Response)=>{
    const { id, name} = req.body as IMovies
    try {            
        const result = await Movies.getFilmsId(id);
        result['id'] = id;
        result['name'] = name;
        const data = await MoviesModel.create(result);
        return res.status(201).json(data);
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}