import * as type from './actionsTypes';
import { BaseTVShow } from '../../../core/models/TVShow';
import { ListResult } from '../../../core/models/List';

export const getPopularTvShows = (page: number = 1) => ({
    type: type.GET_POPULAR_TV_SHOWS,
    payload: {
        page
    }
});

export const geLatestTvShows = (page: number = 1) => ({
    type: type.GET_LATEST_TV_SHOWS,
    payload: {
        page
    }
});

export const getOnAirOnWeek = (page: number = 1) => ({
    type: type.GET_TV_SHOWS_ON_AIR_ON_WEEK,
    payload: {
        page
    }
});

export const getOnAirToday = (page: number = 1) => ({
    type: type.GET_TV_SHOWS_ON_AIR_TODAY,
    payload: {
        page
    }
});

export const savePopularTvShows = (series: ListResult<BaseTVShow>) => ({
    type: type.SAVE_POPULAR_TV_SHOWS,
    payload: series
});

export const saveLatestTvShows = (series: ListResult<BaseTVShow>) => ({
    type: type.SAVE_LATEST_TV_SHOWS,
    payload: series
});

export const saveTvShowsOnAirOnWeek = (series: ListResult<BaseTVShow>) => ({
    type: type.SAVE_TV_SHOWS_ON_AIR_ON_WEEK,
    payload: series
});

export const saveTvShowsOnAirToday = (series: ListResult<BaseTVShow>) => ({
    type: type.SAVE_TV_SHOWS_ON_AIR_TODAY,
    payload: series
});

export const getDetails = (id: number) => ({
    type: type.GET_TV_SHOW_DETAILS,
    payload: {
        id
    }
});
