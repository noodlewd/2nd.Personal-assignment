import React from "react";

const ResultTable = ({ resultData, deleteBtn }) => {
  return (
    <table className="tableDesign">
      {/* props받은 배열을 순회하여 랜더링  */}
      {resultData.map((item, index) => (
        <tr key={index} className="trDesign">
          <td className="tdDesign">{item.country}</td>
          <td className="tdDesign">{item.gold} 개</td>
          <td className="tdDesign">{item.silver} 개</td>
          <td className="tdDesign">{item.bronze} 개</td>
          <td>
            {/* 삭제 버튼 함수를 호출하고 삭제하려는 행의 index를 전달 */}
            <button onClick={() => deleteBtn(index)}>삭제</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ResultTable;
