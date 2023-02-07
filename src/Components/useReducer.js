export const initialState = {
  answer: "",
  lives: 5,
  correct: 0,
  money: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "answer":
      return { ...state, answer: (state.answer = action.payload) };
    case "lives":
      return { ...state, lives: state.lives - action.payload };
    case "correct":
      return { ...state, correct: state.correct + action.payload };
    case "money":
      return { ...state, money: state.money + action.payload };
  }
};
