import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import ResultTable from "./components/ResultTable";

const App = () => {
  // 입력값 저장, 초기값 빈 문자열, 0
  const [data, setData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  // 입력값을 추가하고 테이블에 표시하도록 저장
  const [tableList, setTableList] = useState([]);

  // 초기화용 객체
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
      setData({ ...data, [name]: value }); // 입력값이 비었을경우 그대로 출력
      return;
    }

    if (parseFloat(value) >= 0 && !isNaN(value)) {
      setData({ ...data, [name]: parseFloat(value) }); // 0보다 크거나 같고 숫자일 경우 변환 후 출력
      // 숫자가 아닐 경우
    } else if (isNaN(value)) {
      setData({ ...data, [name]: value }); // 문자열일 경우 그대로 출력
    } else {
      event.target.value = 0; // 그 외의 경우는 0으로 출력
    }
  };

  // 테이블에 데이터를 표시하는 함수
  const resultData = tableList.map((item) => {
    return {
      country: item.country,
      gold: item.gold,
      silver: item.silver,
      bronze: item.bronze,
    };
  });

  // 버튼 클릭을 통해서 함수를 호출
  const createBtn = () => {
    if (data.country !== "") {
      //some메서드를 활용하여 등록된 국가인지 값을 확인
      const isDuplication = tableList.some((item) => item.country === data.country);

      if (isDuplication) {
        alert(`이미 등록된 국가입니다.`); // isDuplication자체가 true값이므로 중복일 경우 alert
      } else {
        setTableList([...tableList, data]); // 국가를 추가하여 출력
        setData(isReset);
      }
    } else {
      alert(`국가를 등록해주세요.`); // 비어있을 경우 alert
    }
  };

  // 삭제버튼 클릭 시 함수를 호출
  const deleteBtn = (index) => {
    const deleteList = tableList.filter((_, idx) => idx !== index); // 선택 국가를 제외한 나머지로 배열을 다시 생성
    setTableList(deleteList);
  };

  // 업데이트 버튼 클릭 시 함수를 호출
  const updateBtn = () => {
    let existCountry = false; // 국가가 존재하는지 먼저 확인

    const updateList = tableList.map((item) => {
      if (item.country == data.country) {
        // 업데이트 하려는 국가가 있을 경우
        existCountry = true;

        return {
          ...item, // 기존 국가 정보를 유지해준 후 나머지 데이터들 추가
          gold: item.gold + data.gold,
          silver: item.silver + data.silver,
          bronze: item.bronze + data.bronze,
        };
      } else {
        return item; //   나머지 국가들 정보는 그대로 반환
      }
    });
    if (!existCountry) {
      alert(`등록되지 않은 국가입니다.`); // 업데이트 하려는 국가가 없을 경우 alert
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
          {/*국가추가 및 업데이트를 처리해주는 버튼*/}
          <Button createBtn={createBtn} updateBtn={updateBtn} />
        </div>
        {/*데이터를 전달받아 테이블에 데이터를 표시하는 컴포넌트*/}
        <ResultTable resultData={resultData} deleteBtn={deleteBtn} />
      </div>
    </main>
  );
};

export default App;
