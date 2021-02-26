import React from "react";
import { Link } from "react-router-dom";

function LectureList({title}) {
	return(
		<div className="list">
			<div className="title">{title}</div>
		</div>
	)
}

export default LectureList;