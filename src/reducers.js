import { combineReducers } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';

console.log('keplerGlReducer', keplerGlReducer);

export default combineReducers({
  // <-- mount kepler.gl reducer in your app
  foo: (previousState, action) => {
    console.log('previousState, action', previousState, action);
    // const newStateYo = keplerGlReducer(previousState, action);
    // console.log('newStateYo', newStateYo);
    return { ...previousState };
  },
  keplerGl: keplerGlReducer
});
