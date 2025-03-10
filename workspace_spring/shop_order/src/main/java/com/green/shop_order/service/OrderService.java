package com.green.shop_order.service;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;

import java.util.List;

public interface OrderService {

  public void insertOrder(OrderDTO orderDTO);
  public List<OrderDTO> selectOrderList();

}
