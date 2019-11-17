import { GET_INFO }  from '../types/type';
import web from '../apis/WebRequest';
//Action Creator
export const Info = () => async dispatch =>{
    const response = await web.get('');
    dispatch({
        type: GET_INFO,
        payload: response.data
    });
    return response
};
