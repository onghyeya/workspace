package com.green.rest.controller;

import com.green.rest.dto.BoardDTO;
import lombok.extern.slf4j.Slf4j;
import org.apache.juli.logging.Log;
import org.springframework.web.bind.annotation.*;

@Slf4j // log 사용 가능 어노테이션
@RestController
@RequestMapping("/boards") //  일괄적으로 /boards 가 붙음
public class BoardController {

  // 모든 게시글 조회 기능을 제공하는 rest api

  @GetMapping("") // == /boards
  public void getBoardList(){
    log.info("게시글 목록 조회"); //이력이 남음
  }

  // 하나의 게시글 정보 조회 기능을 제공하는 res api
  // (GET) localhost:8080/boards/{boardNum}
  @GetMapping("/{boardNum}") // == /boards/{boardNum}
  public void getBoard(@PathVariable("boardNum") int boardNum){
    log.info("게시글 하나ㅏ");
    log.info("boardNum = " + boardNum);
  }
  // 하나의 게시글 등록 기능을 제공하는 rest api
  // (POST) localhost:8080/boards
  @PostMapping("") // == /boards
  public void insertBoard(@RequestBody BoardDTO boardDTO){
    log.info("게시글 삽입");
    log.info("boardDTO = " + boardDTO);
  }
}
