import { ISwapiResponse, IMovies } from "../interfaces";
import { Axios } from "./axios-setup";

export const get = async ()=> {
    const { data } = await Axios.get<ISwapiResponse>('/films');
    const result = data.results.map(({release_date, title, episode_id})=> {
        return {episode_id,title,release_date}
    });
    return result;
}

export const getId = async (id: number)=> {
    const { data } = await Axios.get<IMovies>(`/films/${id}`);
    const { release_date, title, characters } = data
    const result = {title, release_date, characters}
    return result;
}