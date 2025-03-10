package com.green.First;

public class OrderDTO {
  private String foodSelect;
  private int cnt;
  private String sumSelect;
  private String call;
  private String date;

  public String getFoodSelect() {
    return foodSelect;
  }

  public void setFoodSelect(String foodSelect) {
    this.foodSelect = foodSelect;
  }

  public int getCnt() {
    return cnt;
  }

  public void setCnt(int cnt) {
    this.cnt = cnt;
  }

  public String getSumSelect() {
    return sumSelect;
  }

  public void setSumSelect(String sumSelect) {
    this.sumSelect = sumSelect;
  }

  public String getCall() {
    return call;
  }

  public void setCall(String call) {
    this.call = call;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  @Override
  public String toString() {
    return "Menu{" +
            "foodSelect='" + foodSelect + '\'' +
            ", cnt=" + cnt +
            ", sumSelect='" + sumSelect + '\'' +
            ", call='" + call + '\'' +
            ", date='" + date + '\'' +
            '}';
  }
}
