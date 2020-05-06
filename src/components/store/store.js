import { createStore, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import { reducer as formReducer } from "redux-form"
import initialValueFieldsReducer from '../../reducers/initialValueFieldsReducer'

const reducers = combineReducers({
  initialValueFieldsReducer,
  form: formReducer
})


const store = createStore(reducers, composeWithDevTools());

export default store;