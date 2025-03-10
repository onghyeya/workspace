package com.green.shop_order.mapper;

import com.green.shop_order.dto.BoardDTO;
import com.green.shop_order.dto.JoinDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper {
  public List<JoinDTO> getEmpList();
  public List<BoardDTO> joinList();
}
