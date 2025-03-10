package com.green.shop_order.service;

import com.green.shop_order.dto.BoardDTO;
import com.green.shop_order.dto.JoinDTO;

import java.util.List;

public interface TestService {
  public List<JoinDTO> getEmpList();
  public List<BoardDTO> joinList();
}
