import { configureStore, createSlice } from '@reduxjs/toolkit';

import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer Café', 'Estudar Redux', 'Ler um Livro'] as string[],
  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    },
    remove: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { add, remove } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;