import { put, takeEvery, call,delay } from "redux-saga/effects";
import {actionTypes,setDelayAC, setPhotoAC} from "../bll/photosReducer";
import axios from "axios";

function* PhotosWorker(): Generator<any>  {
try {
    const { data }: any  = yield call(axios.get, 'https://jsonplaceholder.typicode.com/photos',       {
            params: {
                _limit: 24,
            },
        }
    )
    yield delay(1000)
    yield put(setPhotoAC(data))
    yield put(setDelayAC(false))
} catch (e) {
    console.error(e)
}

}

export function* photosWatcher() {
    yield takeEvery(actionTypes.FETCH_PHOTOS, PhotosWorker);
}
