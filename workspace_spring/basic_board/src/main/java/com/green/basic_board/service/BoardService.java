package com.green.basic_board.service;

import com.green.basic_board.dto.BoardDTO;

import java.util.List;

// Service : 프로젝트의 핵심 기능이 정의된 클래스
// BoardService 에서는 핵심 기능(메서드)을 정의만 함
public interface BoardService {
  // mapper 에서 사용한 메서드 그대로 사용
  // 게시글 목록 조회 기능
  public List<BoardDTO> selectBoardList();

  // 게시글 하나의 상세 정보 조회 기능
  public BoardDTO getBoard(int boardNum);

  // 게시글 등록 기능
  public int insertBoard(BoardDTO boardDTO);

}
