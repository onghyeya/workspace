package com.green.shop_order.controller;

import com.green.shop_order.dto.ItemDTO;
import com.green.shop_order.dto.OrderDTO;
import com.green.shop_order.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/orders")
public class OrderController {
 private final OrderService orderService;

  @PostMapping("")
  public void joinOrder( @RequestBody OrderDTO orderDTO){
    orderService.insertOrder(orderDTO);
  }

  @GetMapping("")
  public List<OrderDTO> viewOrderList (){
    return orderService.selectOrderList();
  }
}
