import {
    call,
    put,
    takeLatest,
  } from 'redux-saga/effects';
import { Action } from 'redux-actions';

import * as type from './actionsTypes';
import * as actions from './actions';
import { BaseTVShow } from '../../../core/models/TVShow';

import { TVShowsController } from './../../../core/TMDB/TVShows';
import { ListResult } from '../../../core/models/List';

const controller = new TVShowsController();

export function* getPopular(action: Action<number>) {
    const tvShows: ListResult<BaseTVShow> = yield call(controller.getPopular, action.payload);
    yield put(actions.savePopularTvShows(tvShows));
}

export function* getLatest(action: Action<number>) {
    const tvShows: ListResult<BaseTVShow> = yield call(controller.getLatest, action.payload);
    yield put(actions.saveLatestTvShows(tvShows));
}

export function* getOnAirOnWeek(action: Action<number>) {
    const tvShows: ListResult<BaseTVShow> = yield call(controller.getOnAirOnWeek, action.payload);
    yield put(actions.saveTvShowsOnAirOnWeek(tvShows));
}

export function* getOnAirToday(action: Action<number>) {
    const tvShows: ListResult<BaseTVShow> = yield call(controller.getOnAirToday, action.payload);
    yield put(actions.saveTvShowsOnAirToday(tvShows));
}

export default function* movieSaga() {
    yield takeLatest(type.GET_POPULAR_TV_SHOWS, getPopular);
    yield takeLatest(type.GET_LATEST_TV_SHOWS, getLatest);
    yield takeLatest(type.GET_TV_SHOWS_ON_AIR_ON_WEEK, getOnAirOnWeek);
    yield takeLatest(type.GET_TV_SHOWS_ON_AIR_TODAY, getOnAirToday);
}