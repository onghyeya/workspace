package com.green.board.mapper;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO);
  public int insertBoard(BoardDTO boardDTO);
  public BoardDTO findByBoard(int boardNum);
  public void deleteBoard(int boardNum);
  public void updateBoard(BoardDTO boardDTO);
  public void updateReadCnt(int boardNum);
}
