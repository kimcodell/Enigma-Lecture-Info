import React from "react";
import { Link } from "react-router-dom";
import "./LectureList.scss"

function LectureList({id, title, company, teachers, lecture_count, required_days, review_count, type, book_count, price}) {

    // const lectureTypeList = {"0": "LC", "1": "RC", "2": "종합"}
    let lectureType
    if (type === 0) {
        lectureType = "LC"
    } else if (type === 1) {
        lectureType = "RC"
    } else {
        lectureType = "종합"
    }

    // let lecturePrice = String(price).replace(/(.1)/g,"$1/")

	return(
		<div className="list">
            <img className="teacher_image" src={teachers[0].image} alt="선생님 이미지" />
            <div className="lecture_informaion">
                <Link 
                    to={{
                        pathname: `/detail/${id}`,
                        state: {
                            id
                        }
                    }}
                >
                    <div className="title">{title}</div>
                </Link>
                <div>
                    <span className="company">{company}</span> |
                    {teachers.map(teacher => 
                        <span className="teachers" key={teacher.name}> {teacher.name}</span>
                        // 키값 수정해야 할 수 있음.
                    )}
                </div>

                <dl>
                    <div className="lect_info_row">
                        <dt className="category">강의분량</dt>
                        <dd className="lecture_count"> 총 {lecture_count}강 </dd>
                            |
                        <dd className="second_col">수강기간 {required_days}일</dd>
                    </div>

                    <div className="lect_info_row">
                        <dt className="category">수강평</dt>
                        <dd className="review_info_content"> {review_count}개</dd>
                            |
                        <dd className="second_col"></dd>
                    </div>

                    <div className="lect_info_row">
                        <dt className="category">강의정보</dt>
                        <dd className="lecture_info_content"> {lectureType}</dd>
                            |
                        <dd className="second_col">교재 {book_count}권</dd>
                    </div>
                </dl>

                <div className="price">{price}원</div>
            </div>
		</div>
	)
}

export default LectureList;