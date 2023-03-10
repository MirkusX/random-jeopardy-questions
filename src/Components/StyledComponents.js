import styled from "styled-components";

//stylings
export const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #9f956c;
  width: 50%;
  margin: 0 auto;
  padding: 1em;
  border-radius: 0 0 5px 5px;
  @media (max-width: 811px) {
    width: 90%;
  }
  ${(props) => {
    if (props.stats)
      return `
    display: block;
    `;
  }}
`;

export const StyledQuestionDiv = styled.div`
  width: 50%;
  background-color: #cbbf7a;
  border-radius: 5px;
  padding: 1em;
  @media (max-width: 811px) {
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #f4e87c;
  padding: 1em;
  border-radius: 5px;
`;

export const StyledInput = styled.input`
  padding: 1em;
`;

export const StyledForm = styled.form`
  margin-bottom: 1em;
`;
