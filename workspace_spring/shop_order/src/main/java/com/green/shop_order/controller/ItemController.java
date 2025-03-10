package com.green.shop_order.controller;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import com.green.shop_order.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor // 생성자 주입
@RestController
@RequestMapping("/items")
public class ItemController {
  private final ItemService itemService;

  @GetMapping("")
  public List<ItemDTO> showItemList(OrderDTO orderDTO){
    return itemService.selectItemList(orderDTO);
  }

  @GetMapping("/{itemNum}")
  public ItemDTO showItem(@PathVariable("itemNum") int itemNum){
    return itemService.selectItem(itemNum);
  }

  @PostMapping("")
  public void joinItem(@RequestBody ItemDTO itemDTO){
    itemService.insertItem(itemDTO);
  }

  @PutMapping("/{itemNum}")
  public void updateItem(@PathVariable("itemNum")int itemNum,@RequestBody ItemDTO itemDTO){
    itemDTO.setItemNum(itemNum);
    itemService.updateItem(itemDTO);
  }


}
