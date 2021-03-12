import React from "react";
import "./CurriculumTable.scss";

function CurriculumTable({name, curri}) {
    const makeList = () => {
        const curriculum_list = curri.split('%')
        return curriculum_list
    }
    const curri_list = makeList()

    return (
        <table>
            <thead>
                <tr className="each_lecture">
                    <td className="lecture_index">번호</td>
                    <td className="lecture_name">{name}</td>
                </tr>
            </thead>
            <tbody>
            {curri_list.map((lecture, i) =>
                <tr key={i} className="each_lecture">
                    <td className="lecture_index">{i+1}강</td>
                    <td className="lecture_name">{lecture}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default CurriculumTable;