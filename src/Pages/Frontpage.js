import { useContext, useReducer, useRef } from "react";
import {
  FlexDiv,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledQuestionDiv,
} from "../Components/StyledComponents";
import { DataContext, UpdateContext } from "../Components/useContext";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  //usecontext for data
  const { data } = useContext(DataContext);
  //usecontext for update state
  const { update, setUpdate } = useContext(UpdateContext);
  //reducer and initialstate import
  const [state, dispatch] = useReducer(reducer, initialState);
  //ref to target form
  const form = useRef();
  //function for submitting answer
  const submitAnswer = (e) => {
    //prevents page for reloading
    e.preventDefault();
    //resets form
    form.current.reset();
    //map to access items within data
    data.map((item, index) => {
      //checks if user submitted answer is same as data answer, converts both to uppercase for easier comparison. increments both correct state and money state and updates update state
      if (state.answer.toUpperCase() === item.answer.toUpperCase()) {
        dispatch({ type: "correct", payload: 1 });
        dispatch({ type: "money", payload: Number(item.value) });
        setUpdate(!update);
      } else if (state.lives === 0) {
        alert("You are out of lives");
        return;
      } else {
        dispatch({ type: "lives", payload: 1 });
        setUpdate(!update);
      }
    });
  };
  //function for buying more lives, checks if players has enough points and displays alert if requirement not met
  const buy = () => {
    if (state.money >= 1000) {
      dispatch({ type: "livesIncrease", payload: 1 });
      dispatch({ type: "moneyDecrease", payload: 1000 });
    } else {
      alert("You do not have enough money");
      return;
    }
  };

  return (
    <section>
      {/* maps out data from api */}
      {data.map((item, index) => {
        return (
          <FlexDiv key={index}>
            <StyledQuestionDiv>
              <h2>{item.question}</h2>
              <p>Value: {item.value}</p>
            </StyledQuestionDiv>
            <FlexDiv stats>
              <p>Lives: {state.lives}</p>
              <p>Money: {state.money}</p>
              <p>Correct: {state.correct}</p>
            </FlexDiv>
            <StyledForm ref={form} onSubmit={submitAnswer}>
              <StyledInput
                type="text"
                onInput={(e) =>
                  dispatch({ type: "answer", payload: e.target.value })
                }
              />
              <input type="submit" hidden />
            </StyledForm>
            <StyledButton onClick={() => buy()}>
              Buy more lives: 1000
            </StyledButton>
          </FlexDiv>
        );
      })}
    </section>
  );
};
