import { useContext, useReducer, useRef, useState } from "react";
import { DataContext } from "../Components/useContext";
import { initialState, reducer } from "../Components/useReducer";

export const Frontpage = () => {
  const { data } = useContext(DataContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const form = useRef();
  const submitAnswer = (e) => {
    e.preventDefault();
    form.current.reset();
    data.map((item, index) => {
      if (state.answer.toUpperCase() === item.answer.toUpperCase()) {
        console.log("correct");
      } else {
        dispatch({ type: "lives", payload: 1 });
      }
    });
  };

  return (
    <section>
      <div>
        <h1>Frontpage</h1>
      </div>
      {data.map((item, index) => {
        console.log(item.answer);
        return (
          <div>
            <h2>{item.question}</h2>
            <p>Value: {item.value}</p>
            <p>Lives: {state.lives}</p>
            <form ref={form} onSubmit={submitAnswer}>
              <input
                type="text"
                onInput={(e) =>
                  //   setAnswer((answer) => (answer = e.target.value))
                  dispatch({ type: "answer", payload: e.target.value })
                }
              />
              <input type="submit" hidden />
            </form>
          </div>
        );
      })}
    </section>
  );
};
