package com.green.basic_board.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
// 사용자 정의 자료형 :  CLASS
public class BoardDTO {
  // DB 테이블 컬럼명 기준으로 변수 선언
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int readCnt;
  private Timestamp createDate;
}


