package com.example.Second;

import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor // 매개변수 없는 생성자
@AllArgsConstructor // 모든 매개변수를 갖는 생성자
public class Member {
  private String id;
  private  int age;
  private  String pw;
}
