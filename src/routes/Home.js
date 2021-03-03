import React, { useEffect, useState } from "react";
import axios from "axios";
import LectureList from "../component/LectureList";
import "./Home.scss"

function Home() {
	const main = [{
		"id": 111018,
		"title": "[850점+목표] 해커스 토익 Listening Part 1,2 [2020 최신개정판]",
		"lecture_type": 0,
		"price": 95200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "한승태",
				"image": "https://champ.hackers.com/files/teacher/intro/339/f4acfd488cd3152ba63bc9f8cadd0fee.png"
			},
			{
				"name": "김윤지",
				"image": "https://champ.hackers.com/files/teacher/intro/396/969a78d7564a89594ba39eeb737e26f2.png"
			}
		],
		"lecture_count": 34,
		"required_days": 45,
		"book_count": 1,
		"review_count": 114,
		"class_style": []
	},
	{
		"id": 111019,
		"title": "[850점+목표] 해커스 토익 Listening Part 3 [2020 최신개정판]",
		"lecture_type": 0,
		"price": 87200,
		"company": "해커스",
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
		"class_style": []
	},
	{
		"id": 111020,
		"title": "[750점+목표] 한 권으로 끝내는 해커스 토익 실전 LC",
		"lecture_type": 0,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김현서",
				"image": "https://champ.hackers.com/files/teacher/intro/778/a9b9029018942c7c5c61654bbe019d1b.png"
			}
		],
		"lecture_count": 76,
		"required_days": 120,
		"book_count": 1,
		"review_count": 424,
		"class_style": []
	},
	{
		"id": 111021,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 51,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	},
	{
		"id": 111022,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 51,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	},
	{
		"id": 111023,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 51,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	},
	{
		"id": 111024,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 51,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	},
	{
		"id": 111025,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 121,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	},
	{
		"id": 111026,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 51,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	},
	{
		"id": 111027,
		"title": "해커스 토익 왕기초 Reading",
		"lecture_type": 1,
		"price": 87200,
		"company": "해커스",
		"teachers_list": [
			{
				"name": "김진태",
				"image": "https://champ.hackers.com/files/teacher/intro/632/3cca04da266b708b88c5d61680507ffe.png"
			}
		],
		"lecture_count": 51,
		"required_days": 60,
		"book_count": 2,
		"review_count": 24,
		"class_style": []
	}]

	// const [lectures, setLectures] = useState([])

	// const getLectures = async() => {
	// 	const { data : {main : main} } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
	// 	setLectures(main)
	// };

	// useEffect(() => {
	// 	this.getLectures();
	// }, [])

	return(
		<div className="list_container">
			<h1>안녕하세요!</h1>
			<div className="lecture_selector">
				{/* <div className="score_selector"> */}
					<span>목표 점수 
						<select name="score" id="score">
							<option>550</option>
							<option>650</option>
							<option>700</option>
							<option>750</option>
							<option>850</option>
							<option>900</option>
						</select>
					점 기준</span>
				{/* </div> */}

				{/* <div className="type_selector"> */}
					<span>
						<select name="type" id="type">
							<option>LC</option>
							<option>RC</option>
							<option>종합</option>
						</select>
					강의를 확인해보세요.</span>
				{/* </div> */}
			</div>
			<div className="main_list">
				{main.map(lecture => 
					<LectureList 
						key={lecture.id}
						title={lecture.title}
						company={lecture.company}
						teachers={lecture.teachers_list}
						lecture_count={lecture.lecture_count}
						required_days={lecture.required_days}
						review_count={lecture.review_count}
						type={lecture.lecture_type}
						book_count={lecture.book_count}
						price={lecture.price}
						/>
				)}
			</div>
		</div>
	)
}

export default Home;