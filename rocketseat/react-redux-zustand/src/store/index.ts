import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer Café', 'Estudar Redux', 'Ler um Livro'] as string[],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

