import React, { useEffect, useState } from "react";
import axios from "axios";
import LectureList from "../component/LectureList";

function Home() {
	const main = [{
		"id": 111018,
		"title": "[850점+목표] 해커스 토익 Listening Part 1,2 [2020 최신개정판]",
		"lecture_type": 0,
		"price": 95200,
		"company": 1,
		"teachers_list": [
			{
				"name": "한승태",
				"image": "https://champ.hackers.com/files/teacher/intro/339/f4acfd488cd3152ba63bc9f8cadd0fee.png"
			}
		],
		"lecture_count": 34,
		"required_days": 45,
		"book_count": 1,
		"review_count": 114,
		"class_style": [],
		"is_package": false,
		"url": "https://champ.hackers.com/?r=champstudy&c=lecture/lec_toeic&sub=detail&lec_id=15034",
		"views": 0,
		"books_list": [
			{
				"title": "해커스 토익 LISTENING (2020 최신개정판)",
				"price": 18800,
				"url": "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788965423355&orderClick=LAG&Kc="
			}
		],
		"review": [],
		"curriculum": [
			"Orientation%Part 1 기본다지기%Part 1 실전연습%Part 1 Course 1 Hackers Practice%Part 1 Course 1 Hackers Test%Part 1 Course 2 Hackers Practice%Part 1 Course 2 Hackers Practice%Part 1 Course 2 Hackers Test & Part Test%Part 2 기본다지기, Part 2 실전연습 1번-10번%Part 2 실전연습 11번-25번%Part 2 Course 1 의문사의문문 Hackers Practice (Who 의문문)%Part 2 Course 1 의문사의문문 Hackers Practice (Where 의문문)%Part 2 Course 1 의문사의문문 Hackers Practice (When 의문문)%Part 2 Course 1 의문사의문문 Hackers Practice (What 의문문)%Part 2 Course 1 의문사의문문 Hackers Practice (Which 의문문)%Part 2 Course 1 의문사의문문 Hackers Practice (Why 의문문)%Part 2 Course 1 의문사의문문 Hackers Practice (How 의문문)%Part 2 Course 1 의문사의문문 Hackers Test 1번-20번%Part 2 Course 1 의문사의문문 Hackers Test 21번-40번%Part 2 Course 2 일반의문문 Hackers Practice (조동사 의문문)%Part 2 Course 2 일반의문문 Hackers Practice (Be 동사 의문문)%Part 2 Course 2 & 3 부정의문문, 부가의문문 기본다지기%Part 2 Course 2 일반의문문 Hackers Practice (부정 의문문)%Part 2 Course 2 일반의문문 Hackers Practice (의문사를 포함한..)%Part 2 Course 2 일반의문문 Hackers Test 1번-20번%Part 2 Course 2 일반의문문 Hackers Test 21번-40번%Part 2 Course 3 기타의문문 Hackers Practice (선택 의문문)%Part 2 Course 3 기타의문문 Hackers Practice (부가 의문문)%Part 2 Course 3 기타의문문 Hackers Practice (평서문)%Part 2 Course 3 기타의문문 Hackers Practice (제안,제공,요청 의문문)%Part 2 Course 3 기타의문문 Hackers Test 1번-20번%Part 2 Course 3 기타의문문 Hackers Test 21번-40번%Part 2 Part Test%[최신인강 업데이트] Part 2 선택의문문%[최신인강 업데이트] Part 2 제안,제공,요청 의문문"
		]
	},
	{
		"id": 111019,
		"title": "[850점+목표] 해커스 토익 Listening Part 3 [2020 최신개정판]",
		"lecture_type": 0,
		"price": 87200,
		"company": 1,
		"teachers_list": [
			{
				"name": "한승태",
				"image": "https://champ.hackers.com/files/teacher/intro/339/f4acfd488cd3152ba63bc9f8cadd0fee.png"
			}
		],
		"lecture_count": 26,
		"required_days": 45,
		"book_count": 1,
		"review_count": 54,
		"class_style": [],
		"is_package": false,
		"url": "https://champ.hackers.com/?r=champstudy&c=lecture/lec_toeic&sub=detail&lec_id=15035",
		"views": 0,
		"books_list": [
			{
				"title": "해커스 토익 LISTENING (2020 최신개정판)",
				"price": 18800,
				"url": "http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788965423355&orderClick=LAG&Kc="
			}
		],
		"review": [],
		"curriculum": [
			"Orientation 01%Orientation 02%Part 3 실전 연습%Part 3 실전 연습%Part 3 Course 1 문제 유형별 공략 1. 주제 및 목적 문제%Part 3 Course 1 문제 유형별 공략 2. 화자 및 장소 문제%Part 3 Course 1 문제 유형별 공략 3. 요청/제안/언급 문제%Part 3 Course 1 문제 유형별 공략 4. 문제점 문제%Part 3 Course 1 문제 유형별 공략 5. 이유/방법/정도 문제%Part 3 Course 1 문제 유형별 공략 6. 다음에 할 일 문제%Part 3 Course 1 문제 유형별 공략 7. 특정 세부 사항 문제%Part 3 Course 1 문제 유형별 공략 8. 의도 파악 문제%Part 3 Course 1 문제 유형별 공략 9. 추론 문제%Part 3 Course 1 문제 유형별 공략 10. 시각 자료 문제%Part 3 Course 1 문제 유형별 공략 Hackers Test%Part 3 Course 1 문제 유형별 공략 Hackers Test%Part 3 Course 2 대화 상황별 공략 1. 회사 업무,사무기기 관련%Part 3 Course 2 대화 상황별 공략 2. 인사,사내 행사 관련%Part 3 Course 2 대화 상황별 공략 3. 마케팅,판매,재정 관련%Part 3 Course 2 대화 상황별 공략 4. 일상 생활 관련%Part 3 Course 2 대화 상황별 공략 5. 여행,여가 관련%Part 3 Course 2 대화 상황별 공략 Hackers Test%Part 3 Course 2 대화 상황별 공략 Hackers Test%Part 3 Part Test%Part 3 Part Test%[최신인강 업데이트] Part 3&4 시각자료 문제풀이%[최신인강 업데이트] Part 3&4 의도 파악 문제%[최신인강 업데이트] Part 3 3인 대화 문제"
		]
	}]

	// const [lectures, setLectures] = useState([])

	// const getLectures = async() => {
	// 	const { data : main } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
	// 	setLectures(main)
	// };

	// useEffect(() => {
	// 	this.getLectures();
	// }, [])

	return(
		<div>
			<div>
				<image src="https://champ.hackers.com/files/teacher/intro/339/f4acfd488cd3152ba63bc9f8cadd0fee.png" style={{width: 10}} />
				<div>
					<h3>해커스 토익 왕기초 Listening</h3>
					<h5>해커스</h5>
					{main.map(lecture => 
						<LectureList title={lecture.title}/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home;