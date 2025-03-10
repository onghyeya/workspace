package com.green.First;


public class Order {
  private int goodNum;
  private String name;
  private int price;
  private int cnt;
  private String id;
  private int sumPrice;

  public Order(int goodNum, String name, int price, int cnt, String id) {
    this.goodNum = goodNum;
    this.name = name;
    this.price = price;
    this.cnt = cnt;
    this.id = id;
  }

  public int getGoodNum() {
    return goodNum;
  }

  public void setGoodNum(int goodNum) {
    this.goodNum = goodNum;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public int getCnt() {
    return cnt;
  }

  public void setCnt(int cnt) {
    this.cnt = cnt;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public int getSumPrice() {
    return getPrice()*getCnt();
  }

  public void setSumPrice(int sumPrice) {
    this.sumPrice = sumPrice;
  }
}
