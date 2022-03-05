import { Request, Response } from "express"
import { Films } from "../api";


export const get = async(req: Request, res: Response)=>{
    try {       
        const result = await Films.get();
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}


export const getId = async(req: Request, res: Response)=>{
    const id = +req.params.id
    try {      
        const result = await Films.getId(id);
        return res.status(200).json(result);
    } catch (error) {
        res.status(404).json({msg: error.message, data: null});
    }
}