package com.green.board.service;

import com.green.board.dto.ReplyDTO;

import java.util.List;

public interface ReplyService {
  public List<ReplyDTO> selectReply(int boardNum);
  public void insertReply(ReplyDTO replyDTO);
  public void deleteReply(int replyNum);
}
