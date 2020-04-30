import { createStore, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { reducer as formReducer } from "redux-form"
import reduceFieldsData from '../../reducers/reduceFieldsData'

const reducers = combineReducers({
  reduceFieldsData,
  form: formReducer
})


const store = createStore(reducers, composeWithDevTools());

export default store;