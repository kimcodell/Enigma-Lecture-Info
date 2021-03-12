import React from "react";
import "./Footer.scss"

function Footer() {
	return (
		<footer className="footer">
			<div className="caution">
				<h4>COPYRIGHT©2021 에니그마</h4>
				<span>
					에니그마의 로고, 브랜드, AI 맞춤 추천 서비스 등은 에니그마의 자산입니다.<br />
					무단 복제 또는 사용을 금합니다.
				</span>
			</div>
			{/* <div>
				<h4>이메일</h4>
				<span>~~~~@!!!.com</span>
			</div> */}
			<div className="contact">
				<h4>CONTACT 에니그마</h4>
				<div className="sns_link">
					{/* <span>~~~~@!!!.com</span> */}
					<a href="https://www.instagram.com/enigma.__official/" target="_blank" rel="noreferrer"><img src="./kakao.png" alt="카카오톡"/></a>
					<a href="https://www.instagram.com/enigma.__official/" target="_blank" rel="noreferrer"><img src="./insta.png" alt="인스타그램"/></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;