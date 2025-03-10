package practice;

public class 문제_3_7 {
  public static void main(String[] args) {
    String[] arr1 = {"aa","bb","cc"};
    String t = test7(arr1);
    System.out.println(t);
  }
  //문자열 배열을 매개변수로 받아
  //배열에 저장된 모든 문자열을 나열하여
  //리턴하는 메소드를 만들고호출해보세요.
  public static String test7 (String[] arr){
    //["aa","bb","cc"] == "aabbcc" >> 정수 숫자 나열하는 것과 동일한 방법임!
    String result = ""; //숫자에서 0과 같음
    for (int i = 0; i<arr.length; i++){
      result = result + arr[i]; // arr[arr.length]까지 누적시킴
    }
    return result;

  }
}
