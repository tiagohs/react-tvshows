import { all } from 'redux-saga/effects';

import TVShowsSaga from '../modules/TVShow/saga';

function* rootSaga() {
    yield all([
        TVShowsSaga(),
      
    ]);
}

export default rootSaga;