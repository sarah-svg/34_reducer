export const initialState = {
  current: '00FF00',
  undo: '',
  redo: ''
};

export default function colorReducer(state, action) {
  switch(action.type) {
    case 'undo':
      return { ...state, undo: action.payload };
    case 'redo':
      return { ...state, redo: action.payload }; 
    default: return state;   
  }
}
