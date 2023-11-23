import NavigationItem from "../navigationItem/NavigationItem";
import "./header.css";
import { UsersContext } from "../../App";
import { useContext } from "react";

const Header = () => {
	const { usersCount } = useContext(UsersContext);
	const contextData = useContext(UsersContext);

	const navElements = [
   	{
   		text: "First",
      	isUppercasetext: true,
      	description: "second description",
    	},
   	{
      	text: "Second",
      	isUppercasetext: true,
      	description: "second description",
   	},
   	{
      	text: "Third",
      	isUppercasetext: true,
      	description: "second description",
   	},
   	{
      	text: "samsung",
      	isUppercasetext: true,
   	},
	];

	return (
		<header>
      	{navElements.map((element) => {
      		return (
         		<NavigationItem
            		key={element.text}
            		text={element.text}
            		isUppercasetext={element.isUppercasetext}
            		description={element.description} />
				);
			})}
			<div>User Count: { usersCount }</div>
			<div>The Longest Name:  { contextData.theLongestUsersName }</div>
   	</header>
	);
};

export default Header;