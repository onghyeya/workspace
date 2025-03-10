package study;

import java.net.http.HttpRequest;

public class Cake {
  public void eat(){
    System.out.println("케잌 야미");
  }
}

class CheeseCake extends Cake{
  public void eat(){
    System.out.println("치즈 케잌 야미");
  }
}

class StrawberryCheeseCake extends CheeseCake{
  public void eat(){
    System.out.println("딸기 치즈 케잌 야미");
  }
}