import { configureStore } from '@reduxjs/toolkit';
import produce from 'immer';

const initialState = {
  employeesList : []
};


const  reducer = (state = initialState, action) => {

  if (action.type === 'ADD_EMPLOYEE') {
    return produce(state, draft => {
      draft.employeesList.push(action.payload);
    });
  }

  return state;
}

export const store =  configureStore({reducer: reducer});