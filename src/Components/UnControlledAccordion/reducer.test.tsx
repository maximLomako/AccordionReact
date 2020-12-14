import React from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


//
// test("reducer should throw error because action type is incorrect", () => {
//   //data
//   const state: StateType = {
//     collapsed: true
//   }
//   //expect
//   expect(() => {
//     reducer(state, {type: FAKETYPE})
//   }).toThrowError();
// })