export const initialState = {
  answer: "",
  lives: 5,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "answer":
      return { ...state, answer: (state.answer = action.payload) };
    case "lives":
      return { ...state, lives: state.lives - action.payload };
  }
};
