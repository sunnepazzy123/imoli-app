import { Request, Response } from "express"
import { Films } from "../api";


export const get = async(req: Request, res: Response)=>{
        const films = await Films.get();
        return res.status(200).json({doc: films});
}


export const getId = async(req: Request, res: Response)=>{
    const id = +req.params.id  
    const film = await Films.getId(id);
    return res.status(200).json({doc: film});
}