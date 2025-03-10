package com.green.shop_order.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ItemDTO {
  private int itemNum;
  private String itemName;
  private int itemPrice;
  private String seller;
  private String itemIntro;
  private LocalDateTime regDate;
}
