const configureStore = require('@reduxjs/toolkit').configureStore;
const { createLogger } = require('redux-logger');
const postsReducer = require('../rtk/features/postSlice');

const logger = createLogger();

//configure store
const store = configureStore({
    reducer: {
        post: postsReducer
    },
    middleware: (getDefaultMiddlewares) => 
        getDefaultMiddlewares().concat(logger),
    
});

module.exports = store