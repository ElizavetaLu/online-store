import { put, call, fork, takeEvery } from 'redux-saga/effects'
import { requestGetData, requestGetIp, requestGetLocation } from '../api/api'
import {
  setCategories,
  setLocation,
  setElectronics,
  setJewelery,
  setMenClothing,
  setWomenClothing
} from '../actions';

import { GET_DATA } from '../actions/types';
import { setData } from '../actions/index';

export function* handleGetData() {
  try {
    const { data } = yield call(requestGetData, 'products?limit=5');
    const categoriesList = yield call(requestGetData, 'products/categories');

    yield put(setCategories(categoriesList.data))
    yield put(setData(data))

  } catch (err) {
    console.error(err)
  }
}


export function* handleCategories() {
  try {
    const electronics = yield call(requestGetData, 'products/category/electronics')
    const jewelery = yield call(requestGetData, 'products/category/jewelery')
    const men = yield call(requestGetData, "products/category/men's clothing")
    const women = yield call(requestGetData, "products/category/women's clothing")


    yield put(setElectronics(electronics.data))
    yield put(setJewelery(jewelery.data))
    yield put(setMenClothing(men.data))
    yield put(setWomenClothing(women.data))

  } catch (err) {
    console.error(err)
  }
}


export function* handleUserLocation() {
  try {
    const ip = yield call(requestGetIp);
    const locationData = yield call(requestGetLocation, ip.data.IPv4);

    const userLocation = {
      city: locationData.data.city,
      country: locationData.data.country_name,
      currency: locationData.data.currency,
    }

    yield put(setLocation(userLocation))

  } catch (err) {
    console.error(err)
  }
}

export function* handleData() {
  yield fork(handleGetData)
  yield fork(handleCategories)
  yield fork(handleUserLocation)
}

export function* watchSaga() {
  yield takeEvery(GET_DATA, handleData)

}

export default function* rootSaga() {
  yield watchSaga()
}