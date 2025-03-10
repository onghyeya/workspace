public class 연산자_2 {
  public static void main(String[] args) {
    //증감 연산자(++, --)
    // 값을 1 증가, 감소 시키는 역할

    int a = 5;
//    // 전위, 후위 증감 연산자를 사용하여 a의 값을 1 증가
    ++a; // 전위 증감 연산자 a += 1; , a = a + 1;
    a++; // 후위 증감 연산자

    System.out.println("a = "+ a);

    // 전위 증감 연산자와 후위 증감 연산자는
    // 단독으로 사용하면 해석에 차이가 없지만
    // 단독 사용이 아닐 시 해석 순서가 달라진다.
    // 단독 사용 : 한 줄에 증감 연산자만 사용한 경우.
    int num = 5;
    System.out.println(num++);
    System.out.println(num);
    System.out.println(++num);
    System.out.println(num--);
    System.out.println(num);

    int x = 10;
    int y = x++; //y=10 x=11
    x = x+5; //y=10 x=16
    System.out.println("x = "+ x);
    System.out.println("y = "+ y);

//    int a = 10;
//    int b = 20;
//    int z = (++a) + (b--); //11+20 전위는 먼저
//    System.out.println("a = "+ a + "b =" + b + "z = "+ z); //a=11 b=19 z=31

    int value = 10;
    System.out.println(value++); //10
    System.out.println(value++); //11
    System.out.println(value++); //12

    // '=' : 대입연산자 후위 연산자가 나오면 그때는 마지막이 아님.


    //연산자 우선순위
    //&& 연산자가 || 연산자보다 우선순위가 높다!!!
    //대입연산자(=)가 가장 우선순위가 낮다. 단 예외는 있음(후위 연산자가 들어올경우).
    //나머지 헷갈리는 우선순위는 그냥 괄호 쓰기.


  }
}
