import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../../UI/Button/Button";
import styled from "styled-components";

const CourseInput = (props) => {
  //   const FormControl = styled.div`
  //     margin: 0.5rem 0;

  //     & label {
  //       font-weight: bold;
  //       display: block;
  //       margin-bottom: 0.5rem;
  //     }

  //     & input {
  //       display: block;
  //       width: 100%;
  //       border: 1px solid ${(props) => (props.isvalid ? 'red' : '#ccc')};
  //       background:${(props) => (props.isvalid ? '#fad0ec' : 'transperant')};
  //       font: inherit;
  //       line-height: 1.5rem;
  //       padding: 0 0.25rem;
  //     }

  //     & input:focus {
  //       outline: none;
  //       background: #fad0ec;
  //       border-color: #8b005d;
  //     }
  //   `;

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setValid(true);
    }
    setEnteredValue(event.target.value);
    console.log(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl isvalid={!isValid}> */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* </FormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
