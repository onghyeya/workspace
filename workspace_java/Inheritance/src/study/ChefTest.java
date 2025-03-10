package study;

public class ChefTest {
  public static void main(String[] args) {
    Chef c1 = new Chef();
    c1.makeCook();
    MasterChef c2 = new MasterChef();
    c2.giveOrder();
    c2.makeCook(); // 부모에게서 받은 makeCook 은 못쓴다.
  }
}
