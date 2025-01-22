import React from "react";

const ResultTable = ({ resultData }) => {
  return (
    <table className="tableDesign">
      {resultData.map((item, index) => (
        <tr key={index} className="trDesign">
          <td className="tdDesign">{item.country}</td>
          <td className="tdDesign">{item.gold} 개</td>
          <td className="tdDesign">{item.silver} 개</td>
          <td className="tdDesign">{item.bronze} 개</td>
        </tr>
      ))}
    </table>
  );
};

export default ResultTable;
