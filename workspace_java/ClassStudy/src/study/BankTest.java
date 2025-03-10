package study;

public class BankTest {
  public static void main(String[] args) {
    // Bank class 에 대한 객체를 5개 저장할 수 잇는 배열 bankArr을 생성
    // bank 클래스에 대한
    // 객체 5개를 저장할수 있는 공간 만든 코드(객체 5개x)
    Bank[] bankArr = new Bank[5];

    // bank 클래스에 대한 객체를 5개 생성, 초기값 마음대로
    // 그 다음 bankArr 에 객체를 저장
    bankArr[0] = new Bank("Hong",10000,"123-123");
    bankArr[1] = new Bank("Lee",20000,"456-123");
    bankArr[2] = new Bank("Kim",30000,"789-123");
    bankArr[3] = new Bank("Choi",40000,"112-123");
    bankArr[4] = new Bank("Park",50000,"113-123");

    // bankArr에 저장된 모든 계좌의 예금액 합을 출력
    int sum =0;
    for (int i = 0; i<bankArr.length; i++){
      sum = sum + bankArr[i].getBalance();
    }
    System.out.println("모든 계좌 총 금액 " + sum + "원 입니다.");

    // bankArr 에 Bank 객체가 들어가 있기때문에 자료형이 Bank 가 됨
    int sum1 = 0;
    for (Bank bank : bankArr){
      sum1 = sum1 + bank.getBalance();
    }
    System.out.println("계좌 합 : " + sum1 + " 원");

    // 2. bankArr 에 저장된 모든 계좌 정보중에서
    // 계좌주가 "최자바" 인 계좌 정보를 찾고 , 그정보중
    // 예금액을 20%인상시키는 코드를 작성
    for (int i = 0; i< bankArr.length; i++){
      if (bankArr[i].getOwner().equals("Choi")){
        // 최종금액 =  원래금액 * 1.2;
        int result = (int)(bankArr[i].getBalance()*1.2);
        bankArr[i].setBalance(result);
      }
    }
    for (Bank bank : bankArr){
      if (bank.getOwner().equals("Choi")){
        bank.setBalance((int)(bank.getBalance()*1.2));
      }
    }

  }
}
