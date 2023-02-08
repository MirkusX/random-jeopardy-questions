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
  const { data } = useContext(DataContext);
  const { update, setUpdate } = useContext(UpdateContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const form = useRef();
  const submitAnswer = (e) => {
    e.preventDefault();
    form.current.reset();
    data.map((item, index) => {
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
      {data.map((item, index) => {
        console.log(item.answer);
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
