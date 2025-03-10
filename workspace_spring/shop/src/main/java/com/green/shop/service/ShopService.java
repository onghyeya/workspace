package com.green.shop.service;

import com.green.shop.dto.ShopDTO;

import java.util.List;

public interface ShopService {
  public int insertShopItem(ShopDTO shopDTO);

  public List<ShopDTO> getItemList();

  public ShopDTO getItem(int itemCode);

  public int deleteItem(int itemCode);

  public int updateItem(ShopDTO shopDTO);
}
