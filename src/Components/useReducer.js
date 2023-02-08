//initial state for states used in reducer
export const initialState = {
  answer: "",
  lives: 5,
  correct: 0,
  money: 0,
};
//reducer function
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
    case "livesIncrease":
      return { ...state, lives: state.lives + action.payload };
    case "moneyDecrease":
      return { ...state, money: state.money - action.payload };
  }
};
