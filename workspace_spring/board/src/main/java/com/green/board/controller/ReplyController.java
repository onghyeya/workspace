package com.green.board.controller;

import com.green.board.dto.ReplyDTO;
import com.green.board.dto.TestDTO;
import com.green.board.service.ReplyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/replies")
public class ReplyController{
  private ReplyService replyService;

  public ReplyController(ReplyService replyService) {
    this.replyService = replyService;
  }

  @GetMapping("/{boardNum}")
  public List<ReplyDTO> viewReplies(@PathVariable("boardNum") int boardNum){
    return replyService.selectReply(boardNum);
  }

  @PostMapping("")
  public void insertReply(@RequestBody ReplyDTO replyDTO){
    replyService.insertReply(replyDTO);
  }

  @DeleteMapping("/{replyNum}")
  public void deleteReply(@PathVariable("replyNum") int replyNum){
    replyService.deleteReply(replyNum);
  }

//  @GetMapping("/test")
//  public void test(@RequestParam("age") int age,@RequestParam("name") String name ){
//    System.out.println("age = "+age);
//    System.out.println("name = "+name);
//  }
  @GetMapping("/test")
  public void test2(TestDTO testDTO){
    System.out.println(testDTO);
  }
}
