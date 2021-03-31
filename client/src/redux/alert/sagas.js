import {put, takeEvery, delay} from 'redux-saga/effects'
import {SHOW_ALERT} from './types'
import {hideAlert} from './actions'


function* alertGenerator(){
    yield delay(3000)
    yield put(hideAlert())
}

export function* watchAlertGenerator(){
    yield takeEvery(SHOW_ALERT, alertGenerator)
}