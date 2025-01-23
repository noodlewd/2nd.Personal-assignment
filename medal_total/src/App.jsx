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
  const [tableList, setTableList] = useState([]);
  const isReset = {
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  };

  // 입력값이 변경되면 호출
  const InputChange = (event) => {
    const { name, value } = event.target;

    if (value === "") {
      setData({ ...data, [name]: value }); // 그대로 빈 문자열로 업데이트
      return;
    }

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

  const resultData = tableList.map((item) => {
    // map이용하여 배열을 반환
    return {
      country: item.country,
      gold: item.gold,
      silver: item.silver,
      bronze: item.bronze,
    };
  });

  // 버튼 클릭을 통해서 input값이 나오는걸 확인함
  const createBtn = () => {
    if (data.country !== "") {
      //some메서드를 활용
      const isDuplication = tableList.some((item) => item.country === data.country);

      if (isDuplication) {
        alert(`이미 등록된 국가입니다.`);
      } else {
        setTableList([...tableList, data]);
      }
    } else {
      alert(`국가를 등록해주세요.`);
    }
  };
  // 삭제 로직
  const deleteBtn = (index) => {
    const deleteList = tableList.filter((_, idx) => idx !== index);
    setTableList(deleteList);
  };

  // 업데이트 로직
  const updateBtn = () => {
    let existCountry = false;

    const updateList = tableList.map((item) => {
      if (item.country == data.country) {
        existCountry = true;

        return {
          ...item,
          gold: item.gold + data.gold,
          silver: item.silver + data.silver,
          bronze: item.bronze + data.bronze,
        };
      } else {
        return item;
      }
    });
    if (!existCountry) {
      alert(`등록되지 않은 국가입니다.`);
    } else {
      setData(isReset);
      setTableList(updateList);
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
          <Button createBtn={createBtn} updateBtn={updateBtn} />
        </div>
        {/*데이터를 전달받아 데이터를 표시하는 컴포넌트*/}
        <ResultTable resultData={resultData} deleteBtn={deleteBtn} />
      </div>
    </main>
  );
};

export default App;
