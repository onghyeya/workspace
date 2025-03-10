package study;

public class StringTest {
  public static void main(String[] args) {
    String s1 = "Simple";
    String s2 = "java";

    // concat() :  두 문자열을 나열한 결과를 리턴
    String s3 = s1.concat(s2);
    System.out.println(s3);

    // length() : 문자열의 길이를 정수로 리턴
    int len = s3.length();
    System.out.println(len);

    // String.valueOf() : 매개변수로 전달된 데이터를 문자열로 바꿔서 리턴
    String result = String.valueOf(10.5);

    String data = "hi java";
    String r1 = data.substring(3);
    System.out.println(r1);
    String r2 = data.substring(1,4);
    System.out.println(r2);

    String data2 = "a,b,c";
    // split() : 매개변수로 전달된 문자열을 기준으로 문자열을 조각내고
    // 조각 낸 데이터를 return 까지 시켜줌
    String[] r3 = data2.split(",");

    // replace() : 교체한다.
    String r4 = data2.replace(",","-");
    System.out.println(r4);
  }
}
