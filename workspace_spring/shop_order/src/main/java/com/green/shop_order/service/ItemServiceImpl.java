package com.green.shop_order.service;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import com.green.shop_order.mapper.ItemMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor // 생성자 주입과 다른 방법
public class ItemServiceImpl implements ItemService{
  private final ItemMapper itemMapper; // final == 한번 값이 들어가면 값을 바꿀수 없음

  @Override
  public List<ItemDTO> selectItemList(OrderDTO orderDTO) {
    return itemMapper.selectItemList(orderDTO);
  }

  @Override
  public ItemDTO selectItem(int itemNum) {
    return itemMapper.selectItem(itemNum);
  }

  @Override
  public void insertItem(ItemDTO itemDTO) {
    itemMapper.insertItem(itemDTO);
  }

  @Override
  public void updateItem(ItemDTO itemDTO) {
    itemMapper.updateItem(itemDTO);
  }


}
