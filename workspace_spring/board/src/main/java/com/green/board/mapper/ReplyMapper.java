package com.green.board.mapper;

import com.green.board.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReplyMapper {
  public List<ReplyDTO> selectReply(int boardNum);
  public void insertReply(ReplyDTO replyDTO);
  public void deleteReply(int replyNum);
}
