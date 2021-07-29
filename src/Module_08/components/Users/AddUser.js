import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  }

  const changeUsernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const changeUserAgeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  }

  return (
    <div>
      <ErrorModal title='An error this' message='This an error' />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUserName} onChange={changeUsernameHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={enteredUserAge} onChange={changeUserAgeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;