import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';  // Import thunk as a named export

// Root reducer file
import rootReducer from '../reducerSlices/rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export default store;
