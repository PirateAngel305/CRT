const initState = {};

const applyReducer = (state = initState, action) => {
  switch (action.type) {
    case "APPLY_SUCCESS":
      console.log("apply success");
      return state;
    case "APPLY_ERROR":
      console.log("apply error");
      return state;
    default:
      return state;
  }
};

export default applyReducer;
