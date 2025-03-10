package com.green.shop.service;

import com.green.shop.dto.ShopDTO;
import com.green.shop.mapper.ShopMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopServiceImpl implements ShopService{
  private ShopMapper shopMapper;

  public ShopServiceImpl(ShopMapper shopMapper) {
    this.shopMapper = shopMapper;
  }

  @Override
  public int insertShopItem(ShopDTO shopDTO) {
    System.out.println("상품 등록");
    System.out.println(shopDTO.toString());
    return shopMapper.insertShopItem(shopDTO);
  }

  @Override
  public List<ShopDTO> getItemList() {
    System.out.println("상품 목록 조회");
      List<ShopDTO> itemList = shopMapper.getItemList();
    return itemList;
  }

  @Override
  public ShopDTO getItem(int itemCode) {
    System.out.println("상품 조회");
    return shopMapper.getItem(itemCode);
  }

  @Override
  public int deleteItem(int itemCode) {
    System.out.println("상품 삭제");
    return shopMapper.deleteItem(itemCode);
  }

  @Override
  public int updateItem(ShopDTO shopDTO) {
    return shopMapper.updateItem(shopDTO);
  }


}
