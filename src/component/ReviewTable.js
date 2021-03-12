import React from "react";
import "./ReviewTable.scss";

function CurriculumTable({}) {

    return (
        <table>
            <thead>
                <tr>
                    <td>번호</td>
                    <td>키워드</td>
                    <td>비율</td>
                </tr>
            </thead>
            {/* <tbody>
                {.map((, i) =>
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                )}
            </tbody> */}
        </table>
    )
}

export default CurriculumTable;