import {
  takeEvery,
  call,
  put,
  fork,
  select,
  takeLatest,
} from "redux-saga/effects";
import * as api from "../../api";
import * as types from "./types";
import { showAlert } from "../alert/actions";
import { getCurrentTodo } from "./selectors";

function* fetchTodoListGenerator() {
  try {
    const todos = yield call(api.fetchTaskList);
    yield put({ type: types.FETCH_TODOS_SUCCESS, todos });
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* postTodoGenerator() {
  try {
    const task = yield select(getCurrentTodo);
    const { message, todo } = yield call(api.addNewTask, task);
    yield put({ type: types.ADD_TODO_SUCCESS, todo });
    yield put(showAlert(message, "success"));
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* deleteTodoGenerator() {
  try {
    const todo = yield select(getCurrentTodo);
    const message = yield call(api.deleteTask, todo);
    yield put(showAlert(message, "success"));
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* clearTodosGenerator() {
  try {
    const message = yield call(api.clearTasks);
    yield put(showAlert(message, "success"));
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* updateTodoGenerator() {
  try {
    const task = yield select(getCurrentTodo);
    const { todo, message } = yield call(api.updateTask, task);
    yield put({ type: types.UPDATE_TODO_SUCCESS, todo });
    yield put(showAlert(message, "success"));
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* activeTodosGenerator() {
  try {
    const todos = yield call(api.fetchActiveTasks);
    yield put({ type: types.SHOW_ACTIVE_SUCCESS, todos });
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* completedTodosGenerator() {
  try {
    const todos = yield call(api.fetchCompletedTasks);
    yield put({ type: types.SHOW_COMPLETED_SUCCESS, todos });
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* watchTodoGenerators() {
  yield takeEvery(types.FETCH_TODOS, fetchTodoListGenerator);
  yield takeEvery(types.DELETE_TODO, deleteTodoGenerator);
  yield takeEvery(types.ADD_TODO, postTodoGenerator);
  yield takeEvery(types.UPDATE_TODO, updateTodoGenerator);
  yield takeLatest(types.CLEAR_TODOS, clearTodosGenerator);
  yield takeLatest(types.SHOW_ALL, fetchTodoListGenerator);
  yield takeLatest(types.SHOW_ACTIVE, activeTodosGenerator);
  yield takeLatest(types.SHOW_COMPLETED, completedTodosGenerator);
}

export function* todoRootSaga() {
  yield fork(watchTodoGenerators);
}
