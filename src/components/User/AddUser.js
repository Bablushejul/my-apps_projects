import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wraper from "../Helpers/Wraper";
//import UserList from "./UserList";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    //const enteredname=nameInputRef.current.value;
    //const enteredUserAge=ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        tittle: "Invalid input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        tittle: "Invalid Age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    //console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wraper>
      {error && (
        <ErrorModal
          tittle={error.tittle}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // ref={nameInputRef}
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number" 
            //ref={ageInputRef}
            value={enteredAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wraper>
  );
};

export default AddUser;
