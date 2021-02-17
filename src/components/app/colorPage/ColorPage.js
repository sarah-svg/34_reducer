/* eslint-disable max-len */
import React, { useReducer } from 'react';
import colorReducer, { initialState } from '../../../reducers/colorReducer';


const ColorPage = () => {
  const [state, dispatch] = useReducer(colorReducer, initialState);

  const undo = () => {
    dispatch({
      type: 'undo',

    });
  };
  const redo = () => {
    dispatch({
      type: 'redo',
        
    });
  };
  //   console.log(state);
  return (
    <> 

      <>
        <button disabled={!state.before.length} data-testid="before" onClick={undo}>undo</button>
        <button disabled={!state.after.length} data-testid="after" onClick={redo}>redo</button>
        <input data-testid="current" id="current" type="color" value={state.current}
          onChange={({ target }) => { dispatch({ type: target.id, payload: target.value }), console.log(target.value);}} />
        <div  data-testid="display"
          style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}>
        </div>
      </>
    </>);


};

export default ColorPage;
