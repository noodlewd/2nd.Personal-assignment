import React from "react";

const InputBox = ({ data, InputChange }) => {
  return (
    <div className="input-total">
      <div className="input-personal">
        국가별
        <input
          type="text"
          className="input-design"
          placeholder="국가 입력"
          name="country"
          onChange={InputChange}
          value={data.country}
        />
      </div>
      <div className="input-personal">
        금메달
        <input type="number" className="input-design" name="gold" onChange={InputChange} value={data.gold} />
      </div>
      <div className="input-personal">
        은메달
        <input type="number" className="input-design" name="silver" onChange={InputChange} value={data.silver} />
      </div>
      <div className="input-personal">
        동메달
        <input type="number" className="input-design" name="bronze" onChange={InputChange} value={data.bronze} />
      </div>
    </div>
  );
};

export default InputBox;
