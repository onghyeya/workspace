package com.green.rest_test.controller;

import com.green.rest_test.dto.OrderDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("orders")
public class OrderController{

  // order-mapper.xml (쿼리 작성)
  // ,OrderMapper(interface) (쿼리)
  // ,OrderService(interface) (쿼리 + 기능)
  // ,OrderServiceImpl (interface 기반으로 실행기능 작성)
  // ,OrderController (모든 기능 조정간다~~~)
  // 모든 주문 정보 조회
  @GetMapping("")
  public List<OrderDTO> getOrderList(){
    List<OrderDTO> orderList = new ArrayList<>();
    orderList.add(new OrderDTO(101,"데님 청바지",15000,2,"aaa"));
    orderList.add(new OrderDTO(102,"맨투맨 반팔 티셔츠",10000,3,"GoGi"));
    orderList.add(new OrderDTO(103,"오버핏 니트",25000,2,"ccc"));
    orderList.add(new OrderDTO(104,"롱 패딩",55000,1,"ng.kim"));
    orderList.add(new OrderDTO(105,"맨투맨 긴팔 티셔츠",12000,3,"ddd"));
    System.out.println(orderList.toString());
    return orderList;
  }

  // 하나의 주문 정보를 조회
  @GetMapping("/{goodNum}")
  public OrderDTO getOrder(@PathVariable("goodNum") int goodNum){
    System.out.println("하나의 주문 정보 조회");
    return null; // orderService.getOrder(goodNum);
  }

  // 하나의 주문정보를 등록하는 기능
  @PostMapping("")
  public OrderDTO insertOrder(@RequestBody OrderDTO orderDTO){
    System.out.println("하나의 주문 정보를 등록");
    return null; //orderService.insertOrder(orderDTO);
  }
  // 하나의 주문을 삭제하는 기능
  @DeleteMapping("/{goodNum}")
  public int deleteOrder(@PathVariable("goodNum")int goodNum){
    System.out.println("하나의 주문을 삭제");
    return 0; //orderService.deleteOrder(goodNum);
  }

  // 하나의 주문 정보에서 상품명과 상품가격을 수정하는 기능
  @PutMapping("/{goodNum}")
  public int updateOrder(@PathVariable("goodNum") int goodNum,@RequestBody OrderDTO orderDTO){
    //orderService.setGoodNum(goodNum);
    System.out.println("하나의 주문정보에서 상품명과 가격을 수정");
    return 0; // orderService.updateOrder(orderDTO);
  }
}
