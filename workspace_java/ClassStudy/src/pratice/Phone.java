package pratice;

public class Phone {
  String brand;
  String model;
  String color;
  int price;
  String tel;

  public void setAllInfo(String brand1,String model1,String color1,int price1,String tel1){
    brand = brand1;
    model = model1;
    color = color1;
    price = price1;
    tel = tel1;
  }

  public void Info(){
    System.out.println("제조사 : " + brand);
    System.out.println("모델명 : " + model);
    System.out.println("색상 : " + color);
    System.out.println("가격 : " + price);
    System.out.println("번호 : " + tel);
  }
}
