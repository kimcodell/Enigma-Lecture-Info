import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

const TopBar = () => {
	const [selected1, setSlected1] = useState(true)
	const [selected2, setSlected2] = useState(false)
	const [selected3, setSlected3] = useState(false)
	
	const [isClicked, setIsClicked] = useState(false)

	const showMenu = () => setIsClicked(!isClicked)

	const select1 = () => {
		setSlected1(true)
		setSlected2(false)
		setSlected3(false)
	}
	const select2 = () => {
		setSlected1(false)
		setSlected2(true)
		setSlected3(false)
	}
	const select3 = () => {
		setSlected1(false)
		setSlected2(false)
		setSlected3(true)
	}

	return(
		<div className="header">
			<div className="top_bar">
				<Link to="/" onClick={select1}><img className="main_logo" src="/enigma_logo.png" alt="메인로고" /></Link>
				<ul className={isClicked ? "navbar_menu active" : "navbar_menu"}>
					<Link to="/" className={selected1 ? "tab selected" : "tab"} onClick={select1}><li>강의 리스트</li></Link>
					<Link to="/" className={selected2 ? "tab selected" : "tab"} onClick={select2}><li>맞춤 추천 받기</li></Link>
					<Link to="/cs" className={selected3 ? "tab selected" : "tab"} onClick={select3}><li>고객센터</li></Link>
				</ul>
				<img className="navbar-togleBtn" src="/menu.png" alt="메뉴 버튼" onClick={showMenu}/>
			</div>
		</div>
	)
}

export default TopBar;