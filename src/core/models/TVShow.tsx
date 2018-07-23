import { BasePerson } from './Person';
import { BaseEpisode } from './Episode';

export interface BaseTVShow {
    id: number;
    name?: string;
    original_name?: string;
    original_language?: string;
    overview?: string;
    vote_count?: number;
    popularity?: number;
    poster_path?: string;
    backdrop_path?: string;
    vote_average?: number;
    first_air_date?: string;
    origin_country?: string[];
    genre_ids?: number[];
}

export interface Genre {
    id: number;
    name?: string;
}

export interface Network {
    id: number;
    name?: string;
    logo_path?: string;
    origin_country?: string;
}

export interface Season {
    id: number;
    name?: string;
    overview?: string;
    poster_path?: string;
    season_number?: number;
    air_date?: string;
    episode_count?: number;
}

export interface TVShow extends BaseTVShow {

    episode_run_time?: number[];
    created_by: BasePerson;
    genres?: Genre[];
    homepage?: string;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: BaseEpisode;
    next_episode_to_air?: BaseEpisode;
    networks?: Network[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    production_companies?: Network[];
    seasons?: Season[];
    status?: string;
    type?: string;
}
