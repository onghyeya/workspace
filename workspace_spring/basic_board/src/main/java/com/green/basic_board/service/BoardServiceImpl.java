package com.green.basic_board.service;

import com.green.basic_board.dto.BoardDTO;
import com.green.basic_board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {
  private BoardMapper boardMapper;

  // 생성자 주입: 스프링이 만들어 놓은 객체를 자료형가지고 자동으로 연결
  @Autowired
  public BoardServiceImpl(BoardMapper boardMapper) {
    this.boardMapper = boardMapper;
  }

  // 게시글 목록 조회 기능 실행하는 메서드 (쿼리+다른기능)
  @Override
  public List<BoardDTO> selectBoardList() {
    System.out.println("게시글 조회를 시작합니다.");
    // 게시글 목록 조회 쿼리 실행
    List<BoardDTO> boardList = boardMapper.selectBoardList();
    System.out.println("게시글 조회를 완료했습니다.");
    return boardList;
  }

  // 하나의 게시글 정보 조회 기능
  @Override
  public BoardDTO getBoard(int boardNum) {
    System.out.println("게시글 정보를 조회합니다.");
    return boardMapper.getBoard(boardNum);
  }

  @Override
  public int insertBoard(BoardDTO boardDTO) {
    return boardMapper.insertBoard(boardDTO);
  }
}
