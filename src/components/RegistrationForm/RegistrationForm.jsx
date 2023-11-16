import { useState } from "react";
import Input from "../Input";
import UserCard from "../UserCard/UserCard";
import { v4 as getUniqueId } from 'uuid';
import styles from "./registrationForm.module.css";

const DEFAULT_USERS = [
  {
    name: 'Lera',
    surname: 'Kim',
    email: 'lera@gmail.com',
    id: getUniqueId(),
  },
  {
    name: 'Dima',
    surname: 'Ivanov',
    email: 'divanov@gmail.com',
    id: getUniqueId(),
  },
  {
    name: 'John',
    surname: 'Smith',
    email: 'john345@gmail.com',
    id: getUniqueId(),
  },
  {
    name: 'Andriy',
    surname: 'Shevchenko',
    email: 'netaras@gamil.com',
    id: getUniqueId(),
  },
];

const RegistrationForm = () => {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();

  // console.log(users);
  // console.log(getUniqueId());

  const onAddUser = () => {
    const user = {
      name,
      surname,
      email,
      id: getUniqueId(),
    };

    setUsers([...users, user]);
    setName("");
    setSurname("");
    setEmail("");
  };

  const onGetName = (value) => {
    setName(value);
  };

  const onGetSurname = (value) => {
    setSurname(value);
  };

  const onGetEmail = (value) => {
    setEmail(value);
  };

  const onDeleteUserHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }
  const onUpdateUserHandler = (id) => {
    const currentUser = users.filter((user) => user.id === id)[0];
    console.log(currentUser);
    setName(currentUser.name);
    setSurname(currentUser.surname);
    setEmail(currentUser.email);
  }

  return (
    <div className={styles['common-registration']}>
      <div className={styles['left-side']}>
        <Input
          label="Name: "
          placeholder="Enter Your Name"
          onChangeFunction={onGetName}
          value={name}
        />
        <Input
          label="Surname: "
          placeholder="Enter Your Surname"
          onChangeFunction={onGetSurname}
          value={surname}
        />
        <Input
          label="Email: "
          placeholder="Enter Your Email"
          onChangeFunction={onGetEmail}
          value={email}
        />
        <button type="button" onClick={onAddUser} className="add-user-button">
          Add User
        </button>
      </div>
      <div className={styles['right-side']}>
        <div className={styles['users-list']}>
          {users.map((user, index) => {
            const { name, surname, email, id } = user;
            return (
              <UserCard
                key={index}
                name={name}
                surname={surname}
                email={email}
                id={id}
                onClickDeleteBtn={onDeleteUserHandler}
                onClickUpdateBtn={onUpdateUserHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;