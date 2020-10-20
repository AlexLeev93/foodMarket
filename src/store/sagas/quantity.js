import {put, takeEvery} from 'redux-saga/effects'


function* incrementUp(action){
    console.log(action.id)
    yield put({type: 'INCREMENT_UP', id: action.id} )
}

export function* watchIncrementUp(){
    yield takeEvery('INCREMENT', incrementUp)
}

function* incrementDown(action){
    yield put({type: 'INCREMENT_DOWN', id: action.id} )
}

export function* watchIncrementDown(){
    yield takeEvery('DECREMENT', incrementDown)
}