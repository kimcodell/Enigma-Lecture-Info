import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
	return(
		<div className="TopBar">
			<Link to="/">강의 리스트</Link>
			<span> 맞춤 추천 받기</span>
			<span> 고객센터</span>
		</div>
	)
}

export default TopBar;