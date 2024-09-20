import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface ITodo {
  id: number;
  name: string;
  done: boolean;
}

const initialState: ITodo[] = [
  { id: 1, name: 'Faire les courses', done: false },
  { id: 2, name: 'Travailler', done: true },
  { id: 3, name: 'Surveiller Fiorella', done: true },
];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: Date.now(), name: action.payload, done: false };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;