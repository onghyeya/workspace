package com.green.security_exam.dto;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RequiredArgsConstructor
public class CustomUserDetails implements UserDetails {
  private final MemberDTO memberDTO;

  @Override //계정의 권한정보를 리턴하는 메서드
  public Collection<? extends GrantedAuthority> getAuthorities() {
    Collection<GrantedAuthority> collection = new ArrayList<>();

    collection.add(new GrantedAuthority() {
      @Override
      public String getAuthority() {
        return memberDTO.getMemRole();
      }
    });

    return collection;
  }

  // 로그인 한사람의 아이디 비번 조히
  @Override
  public String getPassword() {
    return memberDTO.getMemPw();
  }

  @Override
  public String getUsername() {
    return memberDTO.getMemEmail();
  }

  // 현재 로그인 계정이 만료되지 않았어?
  @Override
  public boolean isAccountNonExpired() {
    // 만료되지 않아
    return true;
  }

  // 계정이 잠기지 않았니?
  @Override
  public boolean isAccountNonLocked() {
    // 안 잠겼어
    return true;
  }

  // 자격 증명 만료 여부
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  // 사용 가능 상태야?(블랙리스트 등등)
  @Override
  public boolean isEnabled() {
    return true;
  }
}
