package practice;

public class 문제_1_18 {
  public static void main(String[] args) {
    //1,5,3,8,2 초기값으로 갖는 배열을 생성
    // 최대값을 출력
    int[] arr = {1,5,3,8,2};
    // 0번째 요소를 가장 큰 값이라 가정하고 시작
    // max 라는 변수를 만들고, 거기에 0번재 요소를 저장
    int max = arr[0];
    // 배열의 크기만큼 반복한다
    for (int i = 0; i < arr.length; i++){
      if (max<arr[i]){
        // 반복을 하며 배열 요소의 값과 max 변수의 값을 비교
        max = arr[i];
        // 만약 max값보다 배열 요소의 값이 크다면 배열 요소의 값을 max 변수에 저장한다
      }
    }
    System.out.println("배열의 가장 큰수 : " + max);
  }
}
