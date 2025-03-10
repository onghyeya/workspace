package com.green.board.controller;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.service.BoardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boards")
public class BoardController {
  private BoardService boardService;

  public BoardController(BoardService boardService) {
    this.boardService = boardService;
  }

  @GetMapping("")
  public List<BoardDTO> viewBoardList(SearchDTO searchDTO){
    System.out.println(searchDTO);
    return boardService.selectBoardList(searchDTO);
  }

  @PostMapping("")
  public int joinBoard(@RequestBody BoardDTO boardDTO){
    return boardService.insertBoard(boardDTO);
  }

  @GetMapping("/{boardNum}")
  public BoardDTO viewBoard(@PathVariable("boardNum") int boardNum){
    return boardService.findByBoard(boardNum);
  }

  @DeleteMapping("/{boardNum}")
  public void deleteBoard(@PathVariable("boardNum")int boardNum){
    boardService.deleteBoard(boardNum);
  }

  @PutMapping("/{boardNum}")
  public void updateBoard(@PathVariable("boardNum")int boardNum,@RequestBody BoardDTO boardDTO){
    boardDTO.setBoardNum(boardNum);
    boardService.updateBoard(boardDTO);
  }



}
