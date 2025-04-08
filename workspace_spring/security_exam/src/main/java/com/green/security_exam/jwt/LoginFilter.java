package com.green.security_exam.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.green.security_exam.dto.MemberDTO;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.util.StreamUtils;

import java.nio.charset.StandardCharsets;

@Slf4j
// UsernamePasswordAuthenticationFilter : spring security 의 로그인 로직의 시작점
// UsernamePasswordAuthenticationFilter 클래스를 상속 받아 새로운 클래스를 만든다는 것..
// UsernamePasswordAuthenticationFilter 기능을 우리가 입맛대로 변경해서 사용하겠다는 의미!!!!
public class LoginFilter extends UsernamePasswordAuthenticationFilter {
  private final AuthenticationManager authenticationManager;

  public LoginFilter(AuthenticationManager authenticationManager){
    this.authenticationManager = authenticationManager;// 로그인처리를 담당하는 객체

    setFilterProcessesUrl("/users/login");  // 로그인 요청 url 변경
    setUsernameParameter("memEmail");       // 변경하지 않으면 아이디는 username 으로 전달
    setPasswordParameter("memPw");          // 변경하지 않으면 password 으로 전달
  }
  // attemptAuthentication : 로그인 요청이 발생되면 가장 처음 실행 됨!!!!!!
  // 로그인 요청은 기본적으로 '/login' 임 (post)
  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
    log.info("LoginFilter 클래스의 attemptAuthentication() 실행");

    // 입력한 아이디 및 비번 받기
    MemberDTO dto = new MemberDTO();
    try {
      // 전달되는 아이디 및 비번을 MemberDTO에 저장하는 코드
      ObjectMapper objectMapper = new ObjectMapper();
      //
      ServletInputStream inputStream = request.getInputStream();
      String messageBody = StreamUtils.copyToString(inputStream, StandardCharsets.UTF_8);
      dto = objectMapper.readValue(messageBody,MemberDTO.class);
    }catch (Exception e){
      throw new RuntimeException(e);// 예외 발생시 콘솔에 찍어줘!!
    }

    log.info("전달 받은 아이디 : "+ dto.getMemEmail());
    log.info("전달 받은 비번 : "+ dto.getMemPw());

    return super.attemptAuthentication(request, response); // 받으면 Security : AuthenticationManager 에게 전달 > 이후 검증 시작!
  }
}
