
export interface IMovies {
    id: number;
    name: string;
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    release_date: string;
    characters: [string];
    planets: [string];
    starships: [string];
    vehicles: [string];
    species: [string];
    created: Date;
    edited: Date;
    url: string;
}

export interface BaseResponse {
    count: number;
    previous: null;
    next: null;
    results: IMovies[];
}