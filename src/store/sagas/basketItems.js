import {put, takeEvery} from 'redux-saga/effects'


function* setItem(action){
    yield put({type: 'SET_ITEM', payload: action.selectItem} )
}

export function* watchsetItem(){
    yield takeEvery('ADD_ITEM', setItem)
}

function* removeItem(action){
    console.log(action.id)
    yield put({type: 'REMOVE_ITEM', payload: action.id} )
}

export function* watchRemoveItem(){
    yield takeEvery('DELETE_ITEM', removeItem)
}