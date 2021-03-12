import React from "react";
import { Link } from "react-router-dom";
import "./CustomerCenter.scss"

function CustomerCenter() {
	return (
		<div className="customer_center">
			<div className="customer_center_background">
				<div className="customer_center_title">
					<img className="enigma_logo" src="/enigma_logo.png" alt="메인 로고" />
					<h1>에니그마 이용 중 궁금하신 점이나<br/>불편하신 점이 있으셨나요?</h1>
				</div>
				<img src="/helpcenter.png" alt="고객센터 이미지" className="customer_center_image" />
			</div>
			
			<div className="customer_center_tab_list">
				<div className="customer_center_tab">
					<div className="customer_center_tab1">
						<Link to="faq">
							<h2>FAQ</h2>
							<div>
								고객 여러분들의 궁금한 사항을<br/> FAQ를 통해 해결해보세요.
							</div>
							<img src="/faq.png" alt="FAQ이미지" className="customer_center_tab_image" />
						</Link>
					</div>

					<div className="customer_center_tab2">
						<Link to="/privacy">
							<h2>개인정보처리방침</h2>
							<div>
								에니그마의 개인정보처리방침을 확인해보세요.
							</div>
							<img src="/privacy.png" alt="약관 이미지" className="customer_center_tab_image" />
						</Link>
					</div>

					<div className="customer_center_tab3">
						<h2>연락처</h2>
						<div>
							에니그마 팀에 직접 문의하실 사항이 있으신 경우<br /> 아래 연락처로 문의주세요.
						</div>
						<img src="/contact.png" alt="연락처 이미지" className="customer_center_tab_image" />
					</div>
				</div>
			</div>
		</div>
	)
}


export default CustomerCenter;