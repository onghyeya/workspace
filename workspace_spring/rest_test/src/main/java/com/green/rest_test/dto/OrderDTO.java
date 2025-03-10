package com.green.rest_test.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderDTO {
  private int goodNum;
  private String name;
  private int price;
  private int cnt;
  private String id;
  private int sumPrice;

  public OrderDTO(){}

  public OrderDTO(int goodNum, String name, int price, int cnt, String id) {
    this.goodNum = goodNum;
    this.name = name;
    this.price = price;
    this.cnt = cnt;
    this.id = id;
  }

  public int getSumPrice(){
    return getPrice()*getCnt();
  }
}
