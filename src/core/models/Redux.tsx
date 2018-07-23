import { ListResult } from './List';
import { BaseTVShow } from './TVShow';

export interface TvShowsState {
    populars?: ListResult<BaseTVShow>;
    latest?: ListResult<BaseTVShow>;
    onAirOnWeek?: ListResult<BaseTVShow>;
    onAirToday?: ListResult<BaseTVShow>;
}

export interface Reducers {
    tvshows: TvShowsState;
}