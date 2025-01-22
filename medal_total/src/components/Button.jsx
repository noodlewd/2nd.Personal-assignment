import React from "react";

const Button = ({ btnClick }) => {

  return (
    <div className="btn-total">
      <button className="btn-personal" onClick={btnClick}>
        국가 추가
      </button>
      <button className="btn-personal">업데이트</button>
    </div>
  );
};

export default Button;
