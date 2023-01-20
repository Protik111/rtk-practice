const store = require("./app/store");
const { fetchPosts } = require("./rtk/features/postSlice");

// initial state
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

store.subscribe(() => {

});

store.dispatch(fetchPosts())