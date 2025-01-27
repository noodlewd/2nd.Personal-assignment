import React from "react";

const Button = ({ createBtn, updateBtn }) => {
  return (
    <div className="btn-total">
      <button className="btn-personal" onClick={createBtn}>
        국가 추가
      </button>
      <button className="btn-personal" onClick={updateBtn}>
        업데이트
      </button>
    </div>
  );
};

export default Button;
