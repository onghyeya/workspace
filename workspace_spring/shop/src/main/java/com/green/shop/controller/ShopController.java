package com.green.shop.controller;

import com.green.shop.dto.ShopDTO;
import com.green.shop.service.ShopService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/shops")
public class ShopController {
  private ShopService shopService;

  public ShopController(ShopService shopService) {
    this.shopService = shopService;
  }

  @PostMapping("")
  public int insertItem(@RequestBody ShopDTO shopDTO){
    return shopService.insertShopItem(shopDTO);
  }

  @GetMapping("")
  public List<ShopDTO> getItemList(){
    return shopService.getItemList();
  }

  @GetMapping("/{itemCode}")
  public ShopDTO getItem(@PathVariable("itemCode") int itemCode){
    return shopService.getItem(itemCode);
  }

  // localhost:8080/shops/{itemCode}
  @DeleteMapping("/{itemCode}")
  public int deleteItem(@PathVariable("itemCode") int itemCode){
    return shopService.deleteItem(itemCode);
  }

  //  @PathVariable : url 안에 있는 변수를 받아오겠다.
  //  @DeleteMapping("/{itemCode}") >> 리턴타입이 없을때
  //  public void delItem(@PathVariable("itemCode") int itemCode){
  //    shopService.deleteItem(itemCode);
  //  }

  @PutMapping("/{itemCode}")
  public int updateItem(@PathVariable("itemCode")int itemCode,@RequestBody ShopDTO shopDTO){
    shopDTO.setItemCode(itemCode);
    return shopService.updateItem(shopDTO);
  }

  //  @PostMapping("/update") >> 예전 방법
  //  public void updateItem(@RequestBody ShopDTO shopDTO){
  //    shopService.updateItem(shopDTO);
  //  }

  // @PutMapping("/{itemCode}") >> 리턴타입 없을때
  // public void updateItem(@PathVariable("itemCode") int itemCode, @RequestBody ShopDTO shopDTO){
  //   shopDTO.setItemCode(itemCode);
  //   shopService.updateItem(shopDTO);
  // }



}
