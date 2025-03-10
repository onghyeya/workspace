package com.green.shop_order.service;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import com.green.shop_order.mapper.ItemMapper;

import java.util.List;

public interface ItemService {
  public List<ItemDTO> selectItemList(OrderDTO orderDTO);
  public ItemDTO selectItem(int itemNum);
  public void insertItem(ItemDTO itemDTO);
  public void updateItem(ItemDTO itemDTO);
}
