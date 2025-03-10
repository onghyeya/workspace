import React from "react";

const Map_forEach = () => {
  // 반복문 : for, for of, forEach(), map()

  const arr = [1, 3, 5];
  // forEach() : 배열에서만 가능!
  // ()안의 내용을 반복 실행(=기능)!
  // 매개변수 2개가 들어옴
  // arr.forEach(arr배열의 데이터 하나,arr배열의 크기)
  arr.forEach((item, index) => {
    console.log(`item = ${item}, index = ${index}`);
  });

  // ()안의 내용을 반복 실행 후 필요한 내용을 return 가능!
  const result = arr.map((e, i) => {
    console.log(`e = ${e}, i = ${i}`);
    return e * 2;
  });
  console.log(result);

  return (
    <>
      <div>Map_forEach</div>
    </>
  );
};

export default Map_forEach;
