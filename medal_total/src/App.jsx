import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import ResultTable from "./components/ResultTable";

const App = () => {
  // 입력값 저장
  const [data, setData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  // 입력값을 추가하고 테이블에 표시하도록 저장
  const [resultList, setResultList] = useState([]);

  // 입력값이 변경되면 호출
  const InputChange = (event) => {
    const { name, value } = event.target;
    // 0보다 크고 숫자일 경우
    if (parseFloat(value) >= 0 && !isNaN(value)) {
      setData({ ...data, [name]: parseFloat(value) });
      // 숫자가 아닐 경우
    } else if (isNaN(value)) {
      setData({ ...data, [name]: value });
    } else {
      event.target.value = 0;
    }
  };

  const resultData = resultList.map((item) => {
    // map이용하여 배열을 반환
    return {
      country: item.country,
      gold: item.gold,
      silver: item.silver,
      bronze: item.bronze,
    };
  });

  // 버튼 클릭을 통해서 input값이 나오는걸 확인함
  const btnClick = () => {
    if (data.country !== "") {
      setResultList([...resultList, data]);
      setData({
        country: "",
        gold: 0,
        silver: 0,
        bronze: 0,
      });
    } else {
      alert("국가명을 입력해주세요.");
    }
  };

  return (
    <main className="main-center">
      <div className="box-design">
        <h1>2024 파리올림픽</h1>
        <div className="group">
          {/*데이터를 입력받는 컴포넌트,data와 InputChange 전달받는다*/}
          <InputBox data={data} InputChange={InputChange} />
          {/*버튼 클릭 시 테이블에 데이터 전달(국가추가만 가능)*/}
          <Button btnClick={btnClick} />
        </div>
        {/*데이터를 전달받아 데이터를 표시하는 컴포넌트*/}
        <ResultTable resultData={resultData} />
      </div>
    </main>
  );
};

export default App;
