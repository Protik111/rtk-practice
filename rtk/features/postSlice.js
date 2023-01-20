const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require("node-fetch");

//initial state
const initialState = {
    loading: false,
    singlePost: { },
    posts: [],
    error: ""
};

const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    const response =  await fetch("https://jsonplaceholder.typicode.com/posts/1");

    const posts = await response.json();

    return posts;
})

const postSlice = createSlice({
    name: "post",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.singlePost = action.payload;
        })

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.singlePost = {}
        })
    }
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts; 