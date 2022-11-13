import { createStore } from "redux";
import reducer from './reducers/bugReducer';

const store = createStore(reducer);

export default store;