import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

const TopBar = () => {

	const [isClicked, setIsClicked] = useState(false)

	const showMenu = () => setIsClicked(!isClicked)

	return(
		<div className="header">
			<div className="top_bar">
				<Link to="/"><img className="main_logo" src="enigma_logo.png" alt="메인로고" /></Link>
				<ul className="navbar_menu">
					<Link to="/" className={isClicked ? "tab active" : "tab"}><li>강의 리스트</li></Link>
					<Link to="/" className={isClicked ? "tab active" : "tab"}> <li>맞춤 추천 받기</li></Link>
					<Link to="/cs" className={isClicked ? "tab active" : "tab"}> <li>고객센터</li></Link>
				</ul>
				<img className="navbar-togleBtn" src="menu.png" alt="메뉴 버튼" onClick={showMenu}/>
			</div>
		</div>
	)
}

export default TopBar;