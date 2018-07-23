import { handleActions, Action } from 'redux-actions';

import * as type from './actionsTypes';
import { BaseTVShow } from '../../../core/models/TVShow';
import { ListResult } from '../../../core/models/List';
import { TvShowsState } from '../../../core/models/Redux';

const initialState: TvShowsState = {
    populars: {},
    latest: {},
    onAirOnWeek: {},
    onAirToday: {}
};

export default handleActions(
    {
        [type.SAVE_POPULAR_TV_SHOWS]: 
            (state: TvShowsState = initialState, action: Action<ListResult<BaseTVShow>>): TvShowsState => ({
            ...state,
            populars: action.payload || {}
        }),
        [type.SAVE_LATEST_TV_SHOWS]: 
            (state: TvShowsState = initialState, action: Action<ListResult<BaseTVShow>>): TvShowsState => ({
            ...state,
            populars: action.payload || {}
        }), 
        [type.SAVE_TV_SHOWS_ON_AIR_ON_WEEK]: 
            (state: TvShowsState = initialState, action: Action<ListResult<BaseTVShow>>): TvShowsState => ({
            ...state,
            populars: action.payload || {}
        }),
        [type.SAVE_TV_SHOWS_ON_AIR_TODAY]: 
            (state: TvShowsState = initialState, action: Action<ListResult<BaseTVShow>>): TvShowsState => ({
            ...state,
            populars: action.payload || {}
        })
    }, 
    initialState
);