import {all} from 'redux-saga/effects'
import { watchRemoveItem, watchsetItem } from './sagas/basketItems';
import { watchIncrementUp, watchIncrementDown } from './sagas/quantity';

export default function* rootSaga() {
    yield all([watchIncrementUp(),watchIncrementDown(), watchRemoveItem(), watchsetItem()]);
  }