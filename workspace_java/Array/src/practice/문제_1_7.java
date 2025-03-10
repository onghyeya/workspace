package practice;

public class 문제_1_7 {
  public static void main(String[] args) {
    int[] arr = new int[10];

    for (int sum = 0; sum<10; sum++){
      arr[sum] = sum + 1;
    }

    for (int i = 0; i<arr.length; i++){
      System.out.println(arr[i]);
    }
  }
}
