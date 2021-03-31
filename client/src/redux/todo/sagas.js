import {
  takeEvery,
  call,
  put,
  fork,
  select,
  takeLatest,
} from "redux-saga/effects";
import { fetchTaskList, addNewTask, deleteTask, updateTask, clearTasks, fetchActiveTasks, fetchCompletedTasks } from "../../api";
import {
  ADD_TODO_SUCCESS,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  DELETE_TODO,
  ADD_TODO,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  CLEAR_TODOS,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  SHOW_ALL,
  SHOW_ACTIVE_SUCCESS,
  SHOW_COMPLETED_SUCCESS,
} from "./types";
import { showAlert } from "../alert/actions";
import { getCurrentTodo } from "./selectors";

function* fetchTodoListGenerator() {
  try {
    const todos = yield call(fetchTaskList);
    yield put({ type: FETCH_TODOS_SUCCESS, todos });
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* postTodoGenerator() {
  try {
    const task = yield select(getCurrentTodo);
    const { message, todo } = yield call(addNewTask, task);
    yield put({ type: ADD_TODO_SUCCESS, todo });
    yield put(showAlert(message, "success"));
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* deleteTodoGenerator() {
  try {
    const todo = yield select(getCurrentTodo);
    const message = yield call(deleteTask, todo);
    yield put(showAlert(message, "success"));
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* clearTodosGenerator() {
  try {
    const message = yield call(clearTasks);
    yield put(showAlert(message, 'success'))
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* updateTodoGenerator() {
  try {
    const task = yield select(getCurrentTodo);
    const { todo } = yield call(updateTask, task);
    yield put({ type: UPDATE_TODO_SUCCESS, todo });
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}


function* activeTodosGenerator() {
  try {
    const todos = yield call(fetchActiveTasks);
    yield put({type: SHOW_ACTIVE_SUCCESS, todos})
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

function* completedTodosGenerator() {
  try {
    const todos = yield call(fetchCompletedTasks);
    yield put({type: SHOW_COMPLETED_SUCCESS, todos})
  } catch (error) {
    yield put(showAlert(error, "danger"));
  }
}

export function* watchTodoGenerators() {
  yield takeEvery(FETCH_TODOS, fetchTodoListGenerator);
  yield takeEvery(DELETE_TODO, deleteTodoGenerator);
  yield takeEvery(ADD_TODO, postTodoGenerator);
  yield takeEvery(UPDATE_TODO, updateTodoGenerator);
  yield takeLatest(CLEAR_TODOS, clearTodosGenerator);
  yield takeLatest(SHOW_ALL, fetchTodoListGenerator)
  yield takeLatest(SHOW_ACTIVE, activeTodosGenerator);
  yield takeLatest(SHOW_COMPLETED, completedTodosGenerator);
}

export function* todoRootSaga() {
  yield fork(watchTodoGenerators);
}
