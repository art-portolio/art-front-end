import React from "react";
import styled from "styled-components";

/* Styled Components */
const FormWrapper = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  border: 2px solid #a32330;
  border-radius: 3px;
`;

const FormTitle = styled.h2`
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 2%;
  border-bottom: 2px solid #a32330;
`;

const InputElement = styled.div`
  width: 60%;
  margin: 1% 0;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  font-size: 1.4rem;
  width: 20%;
  text-align: center;
  margin-top: 2%;
  padding: 1%;
  border: 1px solid #a32330;
  border-radius: 3px;
  background-color: #a32330;
  color: #f9f9f9;
  &:hover {
    cursor: pointer;
    background-color: #f9f9f9;
    color: #a32330;
  }
`;

const LogInForm = props => {
  return (
    <FormWrapper>
      <Form onSubmit={props.submitHandler}>
        <FormTitle>Member Log In Form</FormTitle>
        <InputElement>
          <label htmlFor="user">Username:</label>
          <input
            id="user"
            type="text"
            name="username"
            placeholder="ex. jappleseed"
            onChange={props.inputHandler}
            value={props.usernameVal}
          />
        </InputElement>
        <InputElement>
          <label htmlFor="pwd">Password:</label>
          <input
            id="pwd"
            type="password"
            name="password"
            placeholder="password..."
            onChange={props.inputHandler}
            vaue={props.passwordVal}
          />
        </InputElement>
        <SubmitButton type="submit">Log In</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default LogInForm;
