import React from "react";
import './Style.css'
function UserInfoCard({ githubData }) {
	return (
		<div className="datacontainer">
			{githubData.avatar_url ? (<div className="dataitem">
			<img src={githubData.avatar_url}
			alt="avatar" /></div>) : (<div></div>)}
			{githubData.login ? (<div className="dataitem">Login:
			{githubData.login}</div>) : (<div></div>)}
			{githubData.name ? (<div className="dataitem">
			Name : {githubData.name}</div>) : (<div></div>)}
			{githubData.blog ? (<div className="dataitem">
			Blog: {githubData.blog}</div>) : (<div></div>)}
		</div>
	);
}

export default UserInfoCard;
