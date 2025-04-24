import {createStore} from "redux";
import counterReducer from './reducers/counterReducer.js';

// const store = createStore(counterReducer);
// export default store;

const store=createStore(counterReducer);
export default store;