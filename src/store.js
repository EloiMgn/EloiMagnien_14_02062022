import produce from 'immer';
import { createStore } from 'redux';

const initialState = {
  employeesList : []
};


const  reducer = (state = initialState, action) => {

  if (action.type === 'ADD_EMPLOYEE') {
    return produce(state, draft => {
      draft.employeesList.push(action.payload);
    });
  }

  if (action.type === 'randomTeams') {
    return {
      ...state,
      randomTeams: action.value
    };
  }

  return state;
}

export const store = createStore(reducer);