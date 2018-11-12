import {combineReducers} from "redux";
import  baselayerReducer from "./baselayerReducer"


export default combineReducers({
    baseLayers: baselayerReducer
})