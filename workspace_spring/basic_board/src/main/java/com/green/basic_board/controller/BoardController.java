package com.green.basic_board.controller;

import com.green.basic_board.dto.BoardDTO;
import com.green.basic_board.service.BoardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {
  private BoardService boardService;

  // 만약 클래스안에 생성자가 1개만 있으면
  //@Autowired 를 생략해도 자동으로 @Autowired 붙여줌
  public BoardController(BoardService boardService) {
    this.boardService = boardService;
  }

  // 게시글 목록 조회 기능을 제공하는 rest api
  // (GET) localhost:8080/boards
  @GetMapping("")
  public List<BoardDTO> getBoardList(){
    List<BoardDTO> boardList = boardService.selectBoardList();
    return boardList;
  }

  // 게시글 하나의 정보를 조회하는 기능을 제공하는 rest api
  // (GET) localhost:8080/boards/3
  @GetMapping("/{boardNum}")
  public BoardDTO getBoard(@PathVariable("boardNum") int boardNum){
    return boardService.getBoard(boardNum);
  }

  @PostMapping("")
  public int insertBoard(@RequestBody BoardDTO boardDTO){
    System.out.println(boardDTO);
    return boardService.insertBoard(boardDTO);
  }


}
