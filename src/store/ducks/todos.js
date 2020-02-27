import { createActions, createReducer } from 'reduxsauce';

// Creation of ActionTypes and ActionCreators // Criação ActionTypes e ActionCreators

export const { Types, Creators } = createActions({
  addTodo: ['text'],
  toggleTodo: ['id'],
  removeTodo: ['id'],
});

// Creation of ReducerHandlers // Criação dos ReducerHandlers

const INITIAL_STATE = [
  {
    id: 1,
    text: 'Fazer café',
  },
];

const addTodo = (state = INITIAL_STATE, action) => [
  ...state,
  { id: Math.random(), text: action.text, complete: false },
];

const toggleTodo = (state = INITIAL_STATE, action) =>
  state.map(todo => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));

const removeTodo = (state = INITIAL_STATE, action) => state.filter(todo => todo.id !== action.id);

// Creation of Reducer // Criação do reducer

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: addTodo,
  [Types.TOGGLE_TODO]: toggleTodo,
  [Types.REMOVE_TODO]: removeTodo,
});
