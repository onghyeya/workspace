import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 추가

function PaginationExample() {
  const [active, setActive] = useState(1); // 페이지 상태 관리 기본 1
  
  // 페이지네이션 항목 생성
  const items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item 
        key={number} 
        active={number === active}
        onClick={() => setActive(number)} // 클릭 시 active 페이지 업데이트
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className='pagination-test'>
      {/* 기본 크기 Pagination */}
      {/* <Pagination>{items}</Pagination> */}
      <br />

      {/* 큰 사이즈 Pagination */}
      {/* <Pagination size="lg">{items}</Pagination> */}
      <br />

      {/* 작은 사이즈 Pagination */}
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
}

export default PaginationExample;
