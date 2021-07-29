import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Plase inter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Plase inter a valid age (> 0).'
      })
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

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={enteredUserName} onChange={changeUsernameHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" value={enteredUserAge} onChange={changeUserAgeHandler} />
          <Button type="submit" onClick={errorHandler}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;