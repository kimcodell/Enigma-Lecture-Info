import React from "react";
import "./CustomerCenter.scss"

function CustomerCenter() {
	return (
		<div className="customer_center">
			<div className="customer_center_background">
				<div className="customer_center_title">
					<img className="enigma_logo" src="../enigma_logo.png" alt="메인 로고" />
					<h1>에니그마 이용 중 궁금하신 점이나<br/>불편하신 점이 있으셨나요?</h1>
				</div>
				<img src="helpcenter.png" alt="고객센터 이미지" className="customer_center_image" />
			</div>
			
			<div className="customer_center_tab_list">
				<div className="customer_center_tab">
					<div className="customer_center_tab1">
						<h3>FAQ</h3>
						<div className="cscenterbuttontext">
							고객 여러분들이 자주 묻는 질문과 답변을 확인해보세요.
						</div>
						<img src="faq.png" alt="FAQ이미지" className="customer_center_tab_image" />
					</div>

					<div className="customer_center_tab2">
						<h3>약관</h3>
						<div className="cscenterbuttontext">
							에니그마의 이용약관과 개인정보처리방침을 확인해보세요.
						</div>
						<img src="privacy.png" alt="약관 이미지" className="customer_center_tab_image" />
					</div>

					<div className="customer_center_tab3">
						<h3>연락처</h3>
						<div className="cscenterbuttontext">
							에니그마 팀에 직접 문의하실 사항이 있으신 경우 아래 연락처로 문의주세요.
						</div>
						<img src="contact.png" alt="연락처 이미지" className="customer_center_tab_image" />
					</div>
				</div>
			</div>
		</div>
	)
}


export default CustomerCenter;