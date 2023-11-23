import classNames from "classnames";
import { isEmpty } from "lodash";
import { useState, useContext } from "react";
import { UsersContext } from '../../App';
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

const RegistrationForm = (props) => {
	const contextData = useContext(UsersContext);

	const [users, setUsers] = useState(DEFAULT_USERS);

	contextData.setUsersCount(users.length);

	const [name, setName] = useState();
	const [surname, setSurname] = useState();
	const [email, setEmail] = useState();

	const [err, setErr] = useState(false);

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
		if (isEmpty(name) || isEmpty(surname) || isEmpty(email)){
			setErr(true);
		}
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

	const leftSideClassName = classNames(styles['left-side'], {
		[styles['border-red']]: err,
	});

	return (
   	<div className={styles['common-registration']}>
      	<div className={leftSideClassName}>
        		<Input
          		label="Name: "
          		placeholder="Enter Your Name"
          		onChangeFunction={onGetName}
          		value={name} />
      		<Input
          		label="Surname: "
          		placeholder="Enter Your Surname"
          		onChangeFunction={onGetSurname}
          		value={surname} />
      		<Input
          		label="Email: "
          		placeholder="Enter Your Email"
          		onChangeFunction={onGetEmail}
          		value={email} />
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
                			onClickUpdateBtn={onUpdateUserHandler} />
						);
					})}
      		</div>
      	</div>
   	</div>
	);
};

export default RegistrationForm;