public class 출력문_1 {
  public static void main(String[] args){

    // 소괄호 안의 내용을 출력 + 한 줄 개행
    System.out.println("hello~");
    System.out.println("hello~");

    //소괄호 안의 내용을 출력
    System.out.print("hello~");
    System.out.print("hello~");

    //한 줄 개행
    System.out.println();
    //숫자를 출력할때는 쌍따옴표 넣지 않음!
    //문자는 반드시 쌍따옴표로 감싼다.
    System.out.println(5);
    // 숫자를 쌍따옴표에 감싸는 연산이 되지 않는 단순 문자로 인식
    System.out.println("5");

    //연락처 : 01011112222 X(연산됨)/ "01011112222" O(연산안됨) > 차이점을 명확하게
  }
}
