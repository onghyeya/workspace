package com.green.shop_order.mapper;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {
  public List<ItemDTO> selectItemList(OrderDTO orderDTO);
  public ItemDTO selectItem(int itemNum);
  public void insertItem(ItemDTO itemDTO);
  public void updateItem(ItemDTO itemDTO);
}
