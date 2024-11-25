import { combineReducers } from "redux"
import authReducer from "./reducers/authReducers"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"
import { configureStore } from "@reduxjs/toolkit"










const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

// const middleware = applyMiddleware(thunk);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    auth: authReducer,
   
})

const persistedReducer = persistReducer(persistConfig, reducers)

// export const store = createStore(reducers,composeEnhancers(middleware))

export const store = configureStore({
    reducer: persistedReducer
})