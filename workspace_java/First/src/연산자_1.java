public class 연산자_1 {
  public static void main(String[] args) {
    // 산술 연산자(+, -, *, /, %)
    // % : mod(모드) 연산자 : 나눗셈의 나머지
    System.out.println(6 % 2);
    System.out.println(8 % 3);
    System.out.println();

    //정수끼리의 연산은 무조건 정수로 나옴
    System.out.println(8 / 3);
    System.out.println(8.0 / 3);

    int a = 8;
    System.out.println((double)a / 3);
    System.out.println();

    //비교 연산자(<, >, <=, >=, ==, !=)
    //'==' : 같다 , '!=' : 다르다
    System.out.println(5 > 1);
    System.out.println(3 == 3); //true(맞다)라고 나옴

    //복합대입연산자
    int num = 3;

   // num 값을 1증가 시키는 코드
    num = num + 1;
    num += 1; // 복합대입연산자

    System.out.println(num);

    num *= 3;
    num -= 4;
    num /= 2;
    num %= 2;


    //논리연산자
    // &&(앤드*2) : 그리고(둘중에 하나라도 거짓이면 거짓)
    // ||(버티컬바*2) : 이거나 (둘중 하나가 참이거나 둘다 참이면 > 참 둘다 거짓이면 >거짓)
    //and 와 or 연산이 동시에 있으면 and 연산이 우선순위가 높다/()씌워주기
    System.out.println(3 > 1 && 2 < 4);//참 그리고 참 > true
    System.out.println((1 == 1 && 2 > 1) || (3 > 5 && 1 < 4));

    /*
    *
    1.public static void main(String[] args){}빠짐
    2.
    int age;
    long money = 10L;
    double d = 0.25;
    float f = 0.25F;
    String name = "홍혜원";

    4. 주체가 먼저 나와야함.
    a >= b
    a < b && a > c
    a + 3 != 10
    a > 10 || a == b

    * pencils / student  pencils % student

    * a = a + 1;
    * c = c * d;
    * c = c - e;
    * */

  }
}
