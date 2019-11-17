import { combineReducers } from 'redux';
import { GET_INFO }  from '../types/type';


const getInfoReducer = (info = {} ,action) => {
    if (action.type === GET_INFO){
        return action.payload;
    }
    return  info;
};

// Key-Value ，這邊的 Key 會讓 Component 的 mapStateToProp 使用
export default combineReducers({
    Info: getInfoReducer
});