import { combineReducers } from "redux";
import testReducer from "../../features/testaera/testReducer";

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;