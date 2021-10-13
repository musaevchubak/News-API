import {GET_POSTS} from "../types";

const initialState = {post: ''};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:{
      return {...state, post: action.payload}
    }
    default: return state
  }
}

export default postReducer;
