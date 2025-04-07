import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  // 기본 Bootstrap 스타일
import './styles/coustom.scss';  // SCSS 파일을 import
import Test from './test'



function FillExample() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="회원 관리">
        <Test />
      </Tab>
      <Tab eventKey="profile" title="회원 정보">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="총 매출액">
        Tab content for Longer Tab
      </Tab>
      <Tab eventKey="contact" title="질의 응답">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FillExample;
