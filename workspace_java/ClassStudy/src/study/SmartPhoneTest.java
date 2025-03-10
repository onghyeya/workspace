package study;

// 클래스 자료형을 배열로 활용하기
public class SmartPhoneTest {
  public static void main(String[] args) {
    // 스마트폰 5개를 저장할 수 있는 배열 phones 생성
    // 공간만 만든것
    SmartPhone[] phoneArr = new SmartPhone[5];

    // 스마트폰 객체 생성
    SmartPhone p1 = new SmartPhone("i-12",10000,12.5);
    SmartPhone p2 = new SmartPhone("i-13",20000,23.5);
    SmartPhone p3 = new SmartPhone("i-14",30000,10.5);
    SmartPhone p4 = new SmartPhone("i-15",40000,21.5);
    SmartPhone p5 = new SmartPhone("i-16",50000,20.5);
    // 폰 객체를 배열에 저장
    phoneArr[0] = p1;
    phoneArr[1] = p2;
    phoneArr[2] = p3;
    phoneArr[3] = p4;
    phoneArr[4] = p5;

    //phoneArr 배열에 저장된 모든 폰의 모델명, 가격, 크기를 출력

//    for (int i = 0; i < phoneArr.length; i++){
//      phoneArr[i].printInfo();
//    }

    //phoneArr 배열에 저장된 배열에서 0번째에 저장된 phone의 가격을 출력
    System.out.println(phoneArr[0].getPrice());

    //phoneArr 배열에서 크기가 13인치 이상인 폰의 모델명을 모두 출력
//    for (int i = 0; i<phoneArr.length; i++){
//      if (phoneArr[i].getInch()>=13.0){
//        System.out.println(phoneArr[i].getModelName());
//      }
//    }

    // for-each 문
    // for(반복되는 자료형 일치된 변수:어디까지반복)
    for(SmartPhone e:phoneArr){
      if (e.getInch()>=13.0){
        System.out.println(e.getModelName());
      }
    }

  }
}
