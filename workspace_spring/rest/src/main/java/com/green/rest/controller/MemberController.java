package com.green.rest.controller;

import com.green.rest.dto.MemberDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

// 관제탑 역할을 하는 클래스를 만든다.(대부분 controller 를 붙힘)
// 객체 생성 + 관제탑 역할 지정
// 이클래스는 모든 요청(url)을 받는 클래스
@RestController
@RequestMapping("/members")
@Slf4j
public class MemberController {

  @GetMapping("")
  public void getMemberList(){
    System.out.println(" getMemberList() 메서드 실행 ");
  }

  // postman 으로 확인 가능
  // url 은 header/body 로 구분이 되어있음.
  // RequestBody : url 에서 body 를 요청(데이터를 3개 이상 받아올때 사용)
  // 던지는 key 값과 변수명이 반드시 동일,getter & setter 꼭 있어야한다.
  @PostMapping("")
  public void insertMember(@RequestBody MemberDTO memberDTO){
    System.out.println(" insertMember() 메서드 실행 ");
    System.out.println(memberDTO.toString());
  }

  // 회원 한명을 조회 하는 기능
  // localhost:8080/members/AAA
  // url 에 {}로 표현되는 내용은 값을 받아올 때 사용
  // PathVariable : 1-2개 정도 변경값이 들어올때 사용
  @GetMapping("/{age}") // {memId} = "AAA";
  public void getMember(@PathVariable("age") int a){
    System.out.println("getMember() 실행");
    System.out.println("age = " + a);
  }

  // rest >  localhost:8080/members/java/20
  @GetMapping("/{memId}/{memAge}")
  public void getMember2(@PathVariable("memId") String memId,@PathVariable("memAge") int memAge){
    // 아이디와 나이값의 정보가 동일한 사람을 조회.
    System.out.println("memId = " + memId);
    System.out.println("memAge = " + memAge);
  }


  // 회원 한명을 삭제하는 기능을 제공하는 rest api
  // (DELETE) localhost:8080/members/{memId}
  @DeleteMapping("/{memId}")
  public void deleteMember(@PathVariable("memId") String memId){
    log.info("회원 한명 삭제 기능");
    log.info("memId = " + memId);

  }

  //회원 한명의 이름과 나이를 변경하는 기능을 제공하는 rest api
  // (PUT) localhost:8080/members
  @PutMapping("/{memId}")
  public void updateMember(@PathVariable("memId")String memId,@RequestBody MemberDTO memberDTO){
    log.info("회원 한명의 정보 변경");
    log.info("memId = " + memId);
    log.info(memberDTO.toString());
  }



}
