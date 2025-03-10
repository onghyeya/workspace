package com.green.shop_order.mapper;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
  public void insertOrder(OrderDTO orderDTO);
  public List<OrderDTO> selectOrderList();
}
