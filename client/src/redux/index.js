import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { all } from "redux-saga/effects";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { todos } from "./todo/reducer";
import { alert } from "./alert/reducers";
import { watchAlertGenerator as alertSaga } from "./alert/sagas";
import { todoRootSaga as todoSaga } from "./todo/sagas";

const rootReducer = combineReducers({ todoReducer: todos, alert });
function* rootSaga() {
	yield all([todoSaga(), alertSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	(process.env.NODE_ENV !== "production" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
