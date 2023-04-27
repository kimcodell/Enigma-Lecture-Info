import React from "react";
import "./PrivacyPolicy_Faq.scss"

function PrivacyPolicy() {
	return (
		<div className="container">
            <h2>개인정보처리방침</h2>
            <div>
                <dl>
                    <dt>1. 개인정보의 처리 목적</dt>
                    <dd className="sub">에니그마는 다음의 목적을 위해 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.</dd>
                    <dd>- 사용자 간 식별</dd>
                    <dd>- 에니그마 서비스의 개선</dd>
                    <dd>- 사용자에게 맞춤화된 정보 제공</dd>

                    <dt>2. 수집하는 개인정보와 그 목적</dt>
                    <dd className="sub">사용자가 사이트에 접속하는 순간 에니그마에서는 다음과 같은 정보를 수집합니다.</dd>
                    <dd>- IP주소 (사용자 간 식별)</dd>
                    <dd>
                        - 서비스 이용기록 (데이터 가공 및 에니그마 서비스의 개선)<br/>
                        <i>서비스 이용기록에는 IP 주소, 접속 일시, 이용한 서비스 목록, 서비스 이용 과정에서 발생하는 로그와 사용자가 사이트에 입력하는 모든 정보 등이 포함됩니다.</i>
                    </dd>
                    <dd>
                        - 기기정보 (유저에게 맞춤화된 정보 제공)<br/>
                        <i>기기정보에는 사용자가 사용중인 단말의 종류, OS, 사용중인 브라우저의 버전 등이 포함됩니다.</i>
                    </dd>
                    <dd className="sup">
                        아울러, 에니그마에서는 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)' 를 사용합니다.
                        쿠키 사용을 원하지 않는 경우 웹브라우저 상에서 쿠키 설정을 끔으로써 쿠키 저장을 거부하실 수 있습니다. 쿠키 저장을 거부할 경우 서비스 이용에 어려움이 발생할 수 있습니다.
                    </dd>
                    <dd>사용자가 강의 맞춤 추천 받기 서비스를 이용하는 경우 추가적인 정보를 수집합니다.</dd>
                    <dd>사용자가 에니그마 사이트에 회원가입을 하는 경우 추가적인 정보를 수집합니다.</dd>

                    <dt>3. 개인정보의 처리 및 보유 기간</dt>
                    <dd className="sub">에니그마에서는 법령에 따른 개인정보 보유 • 이용기간 내에서 개인정보를 처리 • 보유합니다.</dd>
                    <dd>- 사용자 간 식별 : 사용자가 사이트 접속을 종료할 때까지</dd>
                    <dd>
                        - 서비스 이용기록 : 사용자가 마지막으로 사이트를 이용한 후 6개월 또는 사용자의 별도 요청이 있을 때까지<br/>
                        <i>단, 서비스 이용기록을 불가역적인 데이터 처리 방식으로 사용자 식별이 불가능하게끔 가공한 정보는 에니그마의 서비스 종료까지</i>
                    </dd>
                    <dd>- 유저에게 맞춤화된 정보 제공 : 사용자가 사이트 접속을 종료할 때까지</dd>

                    <dt>4. 개인정보의 제 3자 제공에 관한 사항</dt>
                    <dd>
                        에니그마에서는 개인정보 제 3자 제공을 별도로 하지 않습니다.<br/>
                        <i>단, 서비스 이용 기록을 불가역적인 데이터 처리 방식으로 사용자 식별이 불가능하게끔 가공한 정보는 국내외 개인 및 사업자에게 제공될 수 있습니다.</i>
                    </dd>

                    <dt>5. 이용자의 권리</dt>
                    <dd className="sub">정보주체는 에니그마에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</dd>
                    <dd>- 개인정보 열람 요구</dd>
                    <dd>- 수집된 개인정보에 오류가 있는 경우, 개인정보 정정 요구</dd>
                    <dd>- 개인정보 삭제 요구</dd>
                    <dd className="sup"><i>단, 서비스 이용 기록을 불가역적인 데이터 처리 방식으로 사용자 식별이 불가능하게끔 가공한 정보에 대해서는 정보주체의 식별이 불가능하므로 행사가 불가능합니다.</i></dd>
                    
                    <dt>6. 개인정보의 파기</dt>
                    <dd>에니그마는 원칙적으로 개인정보 처리목적이 달성된 경우 지체없이 해당 개인정보를 파기합니다.</dd>

                    <dt>7. 개인정보 보호책임자</dt>
                    <dd className="sub">에니그마는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련된 정보주체의 불만처리 및 피해구제 등을 위해여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.</dd>
                    <dd>- 성 명: 김민혁</dd>
                    <dd>- 연락처: kimminhyuk02@naver.com</dd>
                    <dd className="sup">정보주체께서는 에니그마의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.</dd>

                    <dt>8. 개인정보 처리방침의 변경</dt>
                    <dd>이 개인정보처리방침은 2023.05.10 부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</dd>

                    <dt>9. 정보주체의 권익침해에 대한 구제방법</dt>
                    <dd className="sub">아래의 기관은 에니그마 과는 별개의 기관으로서, 에니그마의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.</dd>

                    <dl className="center">
                        <dt>▷ 개인정보 침해신고센터 (한국인터넷진흥원 운영)</dt>
                        <dd>소관업무: 개인정보 침해사실 신고, 상담 신청</dd>
                        <dd>전 화: 118</dd>
                        <dd>홈페이지: <a href="https://privacy.kisa.or.kr" target="_blank" rel="noreferrer">https://privacy.kisa.or.kr</a></dd>
                        <dd>주 소: (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터</dd>

                        <dt>▷ 개인정보 분쟁조정위원회</dt>
                        <dd>소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</dd>
                        <dd>전 화: 1833-6972</dd>
                        <dd>홈페이지: <a href="https://www.kopico.go.kr" target="_blank" rel="noreferrer">https://www.kopico.go.kr</a></dd>
                        <dd>주 소: (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층</dd>
                        
                        <dt>▷ 대검찰청 사이버범죄수사단</dt>
                        <dd>전 화: 02-3480-3573</dd>
                        <dd>홈페이지: <a href="https://www.spo.go.kr" target="_blank" rel="noreferrer">https://www.spo.go.kr</a></dd>
                        
                        <dt>▷ 경찰청 사이버안전국</dt>
                        <dd>전 화: 182</dd>
                        <dd>홈페이지: <a href="https://cyberbureau.police.go.kr" target="_blank" rel="noreferrer">https://cyberbureau.police.go.kr</a></dd>
                    </dl>
                </dl>
            </div>
        </div>
	)
}

export default PrivacyPolicy;