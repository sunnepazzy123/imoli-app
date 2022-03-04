import { BaseResponse, IMovies } from "../interfaces";
import { Axios } from "./axios-setup";

export const getFilms = async ()=> {
    const { data } = await Axios.get<BaseResponse>('/films');
    const result = data.results.map(({release_date, title, episode_id})=> {
        return {episode_id,title,release_date}
    });
    return result;
}

export const getFilmsId = async (id: number)=> {
    const { data } = await Axios.get<IMovies>(`/films/${id}`);
    const { release_date, title, characters } = data
    const result = {title, release_date, characters}
    return result;
}