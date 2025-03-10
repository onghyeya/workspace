package com.green.shop_order.service;

import com.green.shop_order.dto.BoardDTO;
import com.green.shop_order.dto.JoinDTO;
import com.green.shop_order.mapper.TestMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TestServiceImpl implements TestService{
  private final TestMapper testMapper;

  @Override
  public List<JoinDTO> getEmpList() {
    return testMapper.getEmpList();
  }

  @Override
  public List<BoardDTO> joinList() {
    return testMapper.joinList();
  }


}
