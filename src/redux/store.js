import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "@redux-saga/core";
import reducers from "./reducers/index"
import rootSaga from "./sagas/index"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const configureStore = preloadedState => createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({})


sagaMiddleware.run(rootSaga)

export default store
export const persistor = persistStore(store)
