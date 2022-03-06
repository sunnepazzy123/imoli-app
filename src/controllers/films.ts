import { Request, Response } from "express"
import { Films } from "../api";


export const get = async(req: Request, res: Response)=>{
    try {     
        const films = await Films.get();
        return res.status(200).json({doc: films});
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}


export const getId = async(req: Request, res: Response)=>{
    const id = +req.params.id
    try {      
        const film = await Films.getId(id);
        return res.status(200).json({doc: film});
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}