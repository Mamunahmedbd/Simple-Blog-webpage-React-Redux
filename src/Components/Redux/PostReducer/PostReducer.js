import { AUTHORS } from "./ActionType";
import initialState from "./initialState";

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORS:
      // const post = state.posts.find((post) => post.id === action.payload);
      state.posts.map((post) => {
        const singlePost = post.find(post.id === action.payload);
        return { ...state, author_names: singlePost };
      });
      return state;
    default:
      return state;
  }
};

export default PostReducer;
