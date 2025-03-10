package com.green.shop_order.service;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import com.green.shop_order.mapper.OrderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService{
  private final OrderMapper orderMapper;

  @Override
  public void insertOrder(OrderDTO orderDTO) {
    orderMapper.insertOrder(orderDTO);
  }

  @Override
  public List<OrderDTO> selectOrderList() {
    return orderMapper.selectOrderList();
  }
}
