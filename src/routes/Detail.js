import React, {useState, useEffect} from "react";
import axios from "axios";
import CurriculumTable from "../component/CurriculumTable"
import ReviewTable from "../component/ReviewTable"
import "./Detail.scss"

function Detail({location}) {
	let id;
	if (location.state) {
		id = location.state.id
	} else {
		const path = location.pathname
		// id = path.split("/detail/")[1]
		// id = parseInt(path.substring(8))
		id = path.substring(8)
	}

	// const [info, setInfo] = useState([])

	// const getDetailInfo = async() => {
	// 	const { data : {detail : detail} } = await axios.get(`/${id}`);
	// 	setInfo(detail)
	// };

	// useEffect(() => {
	// 	this.getDetailInfo();
	// }, [])

	console.log(location)
	console.log(id)
	console.log(typeof(id))

	const detail = {
		"id": 111001,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/339/f4acfd488cd3152ba63bc9f8cadd0fee.png"
			}
		],
		"lecture_count": 25,
		"required_days": 45,
		"book_count": 1,
		"review_count": 187,
		"class_style": [],
		"is_package": false,
		"url": "https://champ.hackers.com/?r=champstudy&c=lecture/lec_toeic&sub=detail&lec_id=15068",
		"views": 0,
		"books_list": [
			{
				"title": "해커스 토익 왕기초 Listening",
				"price": 12510,
				"url": "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788965423294&orderClick=LEa&Kc="
			},
			{
				"title": "해커스 토익 왕기초 Reading",
				"price": 13510,
				"url": "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788965423294&orderClick=LEa&Kc="
			}
		],
		"curriculums": [
			{
				"name": "해커스 토익 왕기초 Listening",
				"curriculum": "오리엔테이션%리스닝 기초 다지기 1 (20p~27p)%리스닝 기초 다지기 2 (28p~p35)%P1 사람의 동작, 상태를 나타내는 표현 익히기 (38p~51p)%P1 풍경 및 사물의 위치, 상태 나타내는 표현 익히기 (52p~61p)%P1 유형별 공략- 사람 중심 사진 (62p~65p)%P1 유형별 공략- 사물 풍경 줌심 사진 (66p~p71)%혼동하기 쉬운 단어 구분하기1 (74p~79p)%혼동하기 쉬운 단어 구분하기2 (80p~85p)%직접적으로 답하는 표현 익히기 (86p~97p)%간접적으로 답하는 표현 익히기 (98p~103p)%P2 유형별 공략- 의문사가 있는 의문문 (104p~107p)%P2 유형별 공략- 의문사가 없는 의문문 (108p~111p)%P2 유형별 공략- 평서문 (112p~117p)%긴 문장 끊어 듣기 (120p~125p)%시간, 순서 및 제안, 요청 표현 익히기 (126p~131p)%회사생활 관련 표현 익히기 (132p~141p)%일상생활 관련 표현 익히기 (142p~151p)%P3 유형별 공략- 전체대화 관련 문제유형 (152p~155p)%P3 유형별 공략- 세부사항 관련 문제유형 (156p~161p)%긴 문장 끊어 듣기 (164p~169p)%바꾸어 쓴 표현(패러프레이징) 이해하기 (170p~175p)%메시지, 연설 관련 표현 익히기 (176p~185p)%안내 및 공지, 방송 관련 표현 익히기 (186p~195p)%P4 유형별 공략- 전체지문 관련 문제유형 (196p~199p)%P4 유형별 공략- 세부사항 관련 문제유형 (200p~205p)"
			},
			{
				"name": "해커스 토익 왕기초 Reading [독해]",
				"curriculum": "오리엔테이션%주어/동사 해석하기 (32p~33p)%목적어/보어/수식어 해석하기 (42p~43p)%명사 해석하기 (50p~51p)%대명사 해석하기 (60p~61p)%형용사 해석하기 (68p~69p)%이메일/편지 · 양식 (72p~83p)%부사 해석하기 (90p~91p)%전치사 해석하기 (102p~103p)%접속사 해석하기 (110p~111p)%동사 해석하기 (118p~119p)%조동사 해석하기 (126p~127p)%기사 · 메시지 대화문 (130p~141p)%수일치 문장 해석하기 (150p~151p)%시제 해석하기 (160p~161p)%수동태 해석하기 (168p~169p)%to부정사 해석하기 (178p~179p)%동명사 해석하기 (186p~187p)%광고 · 공고 (190p~201p)%분사 해석하기 (210p~211p)%명사절 해석하기 (218p~219p)%부사절 해석하기 (226p~227p)%형용사절 해석하기 (234p~235p)%비교구문 해석하기 (244p~245p)%안내문 · 회람 (248p~259p)"
			}
		]
	}
	const {
		title, 
		lecture_type, 
		price, 
		company, 
		teachers_list, 
		lecture_count, 
		required_days, 
		// book_count, 
		review_count, 
		class_style, 
		// is_package, 
		url, 
		books_list,
		curriculums
	} = detail

	let lectureType
	if (lecture_type === 0) {
		lectureType = "LC"
	} else if (lecture_type === 1) {
		lectureType = "RC"
	} else {
		lectureType = "종합"
	}

	return (
		<div className="container">
			<div className="detail_info_container">
				<img className="teacher_image" src={teachers_list[0].image} alt="선생님 이미지" />
				<div className="lecture_info">
					<div className="basic_info">
						<h2>{title}</h2>
						<span>{company}</span>
							|
						<span>{teachers_list[0].name}</span>
							|
						<span>{lectureType}</span>
					</div>

					<div className="books_info">
						<h4>교재정보</h4>
						{books_list.map(book => 
							<div className="each_book" key={book.title}>
								<span className="book_title">{book.title}</span>
								<span className="book_price">{book.price} 원</span>
								<span><a href={book.url} target="_blank" rel="noreferrer">자세히 보기 &gt;</a></span>
							</div>
						)}
					</div>
				</div>
				<div className="lec_price_info">
					<a href={url} target="_blank" rel="noreferrer"><button>상세보기 &gt;</button></a>
					<div className="lecture_price">{price} 원</div>
				</div>
			</div>
			
			<div className="content_container">
				<div className="curriculum_container">
					<div className="curriculum_header">
						<h3>커리큘럼</h3>
						<div>
							<span>총 {lecture_count}강</span>
								|
							<span>{required_days}일</span>
						</div>
					</div>
					{curriculums.map((curriculum, i) =>
						<CurriculumTable key={i} name={curriculum.name} curri={curriculum.curriculum} />
					)}
				</div>

				<div className="review_container">
					<div className="review_header">
						<h3>수강후기 분석</h3>
						<span>총 {review_count}개</span>
					</div>
					{/* <ReviewTable /> */}
					<table>
						<tbody>
							<tr>
								<td>재밌는</td>
								<td>20.3%</td>
							</tr>
							<tr>
								<td>꼼꼼한</td>
								<td>10.2%</td>
							</tr>
							<tr>
								<td>훌륭한</td>
								<td>5.8%</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Detail;