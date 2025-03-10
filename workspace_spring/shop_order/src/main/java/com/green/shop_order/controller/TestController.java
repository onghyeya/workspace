package com.green.shop_order.controller;

import com.green.shop_order.dto.BoardDTO;
import com.green.shop_order.dto.JoinDTO;
import com.green.shop_order.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/test")
public class TestController {
  private final TestService testService;

  @GetMapping("/1")
  public List<JoinDTO> test1() {
    return testService.getEmpList();
  }
  @GetMapping("/2")
  public List<BoardDTO> test2() {
    return testService.joinList();
  }
}
