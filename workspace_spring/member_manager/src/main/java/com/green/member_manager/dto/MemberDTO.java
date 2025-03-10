package com.green.member_manager.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
public class MemberDTO {
  //MEM_ID VARCHAR(10) PRIMARY KEY
  //	, MEM_NAME VARCHAR(10) NOT NULL
  //	, MEM_PW VARCHAR(10) NOT NULL
  //	, MEM_TEL VARCHAR(15) UNIQUE
  //	, MEM_INTRO VARCHAR(30)
  //	, JOIN_DATE DATETIME DEFAULT SYSDATE()
  private String memId;
  private String memName;
  private String memPw;
  private String memTel;
  private String memIntro;
  private Timestamp joinDate;
}
