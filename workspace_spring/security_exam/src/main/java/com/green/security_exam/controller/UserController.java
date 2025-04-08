package com.green.security_exam.controller;

import com.green.security_exam.config.SecurityConfig;
import com.green.security_exam.dto.MemberDTO;
import com.green.security_exam.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
  private final UserService userService;
  private final PasswordEncoder passwordEncoder;

  //회원가입
  @PostMapping("/join")
  public ResponseEntity<?> join(@RequestBody MemberDTO memberDTO){
    log.info("회원가입 기능 실행");

    String  encoded_pw = passwordEncoder.encode(memberDTO.getMemPw());
    memberDTO.setMemPw(encoded_pw);
    userService.join(memberDTO);

    return ResponseEntity.status(HttpStatus.OK).build();
  }

  // 비밀번호 암호화 연습 메서드
  @GetMapping("/test")
  public void testEncode(){
    String str1 = "java";
    String str2 = "java";
    // 암호화 하는 메서드 : 암호화 하고자 하는 문자열 괄호에 입력
    String encodedStr1 = passwordEncoder.encode(str1);
    String encodedStr2 = passwordEncoder.encode(str2);

    System.out.println("암호 str1 : "+encodedStr1);
    System.out.println("암호 str2 : "+encodedStr2);

    // 원래 글자와 비교하는 메서드 존재 : matches(원본 문자열, 암호화 된 문자열) > 실행결과 : true or false
    boolean result1 = passwordEncoder.matches("java",encodedStr1);
    boolean result2 = passwordEncoder.matches("python",encodedStr1);
    System.out.println("result1 : "+result1+" result2 : "+result2);
  }
}
