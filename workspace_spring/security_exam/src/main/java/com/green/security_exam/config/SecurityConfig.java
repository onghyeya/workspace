package com.green.security_exam.config;

import com.green.security_exam.jwt.LoginFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration // 객체 생성 + 설정 내용이 들어가 있는 클래스임
@EnableWebSecurity // 해당 클래스가 security 설정을 컨트롤 할 수 있도록 세팅하는 어노테이션
@EnableMethodSecurity(prePostEnabled = true,securedEnabled = true)
public class SecurityConfig {

  // 실제 시큐리티의 인증&인가를 상징하는 코드
  // 우리가 바꿀수 있는건 매개 변수의 변수명 메서드의 자료명 뿐임 설정은 거의 동일한 형태를 가지고 있다.
  @Bean // return 시켜주는 데이터를 객체로 가지고 있음
  public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authConfig)throws Exception{

    // AuthenticationManager : spring security 에서 실제 로그인 검증을 진행하는 객체
    AuthenticationManager authenticationManager = authConfig.getAuthenticationManager();

    // 회색 글씨 == 매개변수의 자료형을 알려주는 것
    // 아래 (()->{}) == 람다 형식
    http.cors(Customizer.withDefaults()) // 아래 설정한 cors 를 사용할게용!
            .csrf(csrf-> csrf.disable()) // 세션 방식이 아니라 csrf 공격은 무시
            .formLogin(form-> form.disable()) // 세션 방식이 아니라 form 로그인 방식 안써
            .httpBasic(basic-> basic.disable()) // 세션 방식 아니라 basic 안해
            // 아래는 로그인할때마다 session에 정보 유지 안할거야
            .sessionManagement(session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            // 인증 및 인가에 대한 설정을 한 부분
            .authorizeHttpRequests(auth->
                auth.requestMatchers("/test2").authenticated().anyRequest().permitAll() //test2는 인증 된사람만/ test1은 누구나
                //auth.anyRequest().permitAll() // 모든 요청에 대해 접근을 허용함
                //auth.requestMatchers("/test2","/test1").authenticated().anyRequest().permitAll() // , 로 여러개도 인증되게 할수 있음
            );

    // 원래 로그인 요청을 받는 UsernamePasswordAuthenticationFilter 대신
    // 우리가 커스터마이징한 LoginFilter 를 사용하도록 필터 교체
    http.addFilterAt(new LoginFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }

  public CorsConfigurationSource corsConfigurationSource(){
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.addAllowedOrigin("http://localhost:5173"); // react 에서 spring 으로 접근 허용
    config.addAllowedHeader("*"); // 모든 header 정보 허용
    config.addAllowedMethod("*"); // get,post,delete,put 허용

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**",config);
    return source;
  }



  // 비밀번호 암호화 기능을 제공하는 객체 생성 메서드
  @Bean
  public PasswordEncoder getPasswordEncoder(){
    return new BCryptPasswordEncoder();
  }
}
