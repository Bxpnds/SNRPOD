import {INCREMENT} from '../actions/types';

const reducerTemplate = (state, action) => {
    
    if(state == null){
        state = {
            counter: 0
        }
    }

    switch(action.type){

        case INCREMENT:
            return {
                ...state, 
                counter: state.counter + action.data
            }
        default:
            return state;
    }
}

export default reducerTemplate;