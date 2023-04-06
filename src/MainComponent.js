import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import UserInfoCard from "./UserInfoCard";

function Main() {
	const [username, setUsername] = useState("");
	const [githubData, setgithubData] = useState(Object);
	
	useEffect(() => {
		getgithubData();
	}, [username]);

	var gitHubUrl = `https://api.github.com/users/${username}`;

	const getgithubData = async () => {
		const res = await fetch(gitHubUrl);
		const jData = await res.json();
		if (jData && jData.message !== "Not Found") {
			setgithubData(jData);
		}
		else if (username !== "") {
			console.log('Username does not exist');
		}
		else {
			setgithubData({})
		}
	};
	
	return (
		<div>
			<SearchBar username={username}
				setUsername={setUsername} />
			<UserInfoCard githubData={githubData} />
		</div>
	);
}

export default Main;
