package com.example.Second;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
  private MemberService memberService;

  @Autowired // 자동연결 : MemberService 객체를 넣어줌
  public TestController(MemberService memberService){
    this.memberService = memberService;
  }

  @GetMapping("/a")
  public void aaa(){
    System.out.println("aaa 메서드 실행");
    memberService.aaa();
  }
}
