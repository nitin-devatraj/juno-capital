import { combineReducers, createStore } from "redux";
import accountReducer from "../src copy/features/accounts/accountSlice";
import customerReducer from "../src copy/features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
