import React, { createContext, useReducer } from 'react';
import { rules } from '../utils/rules';

const initialState = {
  password: '',
  appliedRules: [rules[0]],
  ruleIndex: 1
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'ADD_RULE':
      if (state.ruleIndex >= rules.length) return state;
      return {
        ...state,
        appliedRules: [...state.appliedRules, rules[state.ruleIndex]],
        ruleIndex: state.ruleIndex + 1
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};