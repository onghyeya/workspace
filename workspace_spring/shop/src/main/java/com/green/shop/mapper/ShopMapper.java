package com.green.shop.mapper;

import com.green.shop.dto.ShopDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper // 객체 생성 + 쿼리 실행 시킬 메서드 인지
public interface ShopMapper {

  public int insertShopItem(ShopDTO shopDTO);

  public List<ShopDTO> getItemList();

  public ShopDTO getItem(int itemCode);

  public int deleteItem(int itemCode);

  public int updateItem(ShopDTO shopDTO);

}
