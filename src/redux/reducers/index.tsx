import { combineReducers } from 'redux';

import TVShowsReducer from './../modules/TVShow/reducer';

export default combineReducers({
    tvshows: TVShowsReducer
});