import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

//middleWares
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
	Boolean,
);
//rootReducer
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
