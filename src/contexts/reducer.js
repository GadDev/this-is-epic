const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "LIKE_POST":
      if (state.likes.find((item) => item === action.payload)) {
        return {
          ...state,
          likes: state.likes.filter((id) => id !== action.payload),
          unlikes: state.unlikes.concat(action.payload),
        };
      }
      return {
        ...state,
        likes: state.likes.concat(action.payload),
        unlikes: state.unlikes.filter((id) => id !== action.payload),
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
