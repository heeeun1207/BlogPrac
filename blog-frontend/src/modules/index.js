//루트 리듀서 생성 , 추후 여러가지 리듀서를 생성할 예정이다. 
import { combineReducers } from "redux";
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

