package com.green.board.service;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;

import java.util.List;

public interface BoardService {
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO);
  public int insertBoard(BoardDTO boardDTO);
  public BoardDTO findByBoard(int boardNum);
  public void deleteBoard(int boardNum);
  public void updateBoard(BoardDTO boardDTO);


}
