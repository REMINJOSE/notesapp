import { createStore,applyMiddleware,compose } from 'redux';
import notesReducer from './notesReducer';
import thunkMiddleware from 'redux-thunk'
const middleware = [ thunkMiddleware]
export const store = createStore(notesReducer,
    compose(
        applyMiddleware(...middleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )     
    );