import {createReducer} from '@reduxjs/toolkit'

const initalstate={
    c:0
};


export const customReducer=createReducer(initalstate,{
    incrementKardo:(state)=>{
        state.c++;//increment by one;
    },
    incrementKardoByValue:(state,action)=>{
        state.c=state.c+action.payload;
    },
    decrementKardo:(state)=>{
        state.c--;
    },
    decrementKardoByValue:(state,action)=>{
        state.c=state.c-action.payload;
    }
});//takes 2 things initalstate,object of reducers