package com.green.rest.controller;

import com.green.rest.dto.ItemDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/items")
public class ItemController {

  @GetMapping("")
  public void getItemList(){
    log.info("모든 상품 조회");
  }

  @GetMapping("/{itemCode}")
  public void getItem(@PathVariable("itemCode")int itemCode){
    log.info("상품 하나 조회");
    log.info("itemCode = " + itemCode);
  }

  @PostMapping("")
  public void insertItem(@RequestBody ItemDTO itemDTO){
    log.info("상품하나 등록");
    log.info("itemDTO = " + itemDTO);
  }

  @DeleteMapping("/{itemCode}")
  public void deleteItem(@PathVariable("itemCode")int itemCode){
    log.info("상품 하나 삭제");
    log.info("itemCode = " + itemCode);
  }

  @PutMapping("/{itemCode}")
  public void updateItem(@PathVariable("itemCode")int itemCode,@RequestBody ItemDTO itemDTO){
    log.info("상품 수정 및 변경");
    log.info("itemDTO = " + itemDTO);
  }

}
