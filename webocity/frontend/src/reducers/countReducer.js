function CountReducer(state, action) {
  if (action.type === "Add_To_Cart") {
    return state + 1;
  }
  return state;
}

export default CountReducer;
