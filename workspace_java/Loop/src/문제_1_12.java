public class 문제_1_12 {
  public static void main(String[] args) {
    //1부터 누적해서 합을 구하다 300이 최초로 넘었을 때
    //for 문을 멈추고 그때까지의 합과
    //마지막으로 더해진 값을 각각 출력하여라
    //1-99까지

    int i=1;
    int sum = 0;

    for (i=1; i<100; i++){
      sum += i;
      if(sum>300)
        break;
    }
    System.out.println("합 : " + sum);
    System.out.println("마지막에 더해진 값 : " + i);
    //for문 안에 넣고 싶다면 for(int i =1; i<100; i++)지정후 break;바로 위에 출력

    // 변수는 이름이 중복 불가
    // 변수는 해당 변수가 선언된 중괄호 안에서만 사용가능
  }
}
