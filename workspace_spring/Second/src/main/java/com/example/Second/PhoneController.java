package com.example.Second;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PhoneController {
  private Phone phone;
  private BoardService boardService;

  @Autowired //자동 연결 : 생성자 주입
  public PhoneController(Phone phone, BoardService boardService) {
    this.phone = phone;
    this.boardService = boardService;
  }


}
