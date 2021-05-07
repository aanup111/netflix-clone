import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";

function ProfileScreen() {
	const user = useSelector(selectUser);

	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						alt="avatar"
					/>
					<div className="profileScreen__details">
						<h2>{user.email}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
