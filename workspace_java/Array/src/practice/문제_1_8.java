package practice;

public class 문제_1_8 {
  public static void main(String[] args) {
    int[] arr = {1,5,7};
    int x = 0;
    //arr[0]=1 + arr[1]=5 + arr[2]=7
    for (int i =0; i< arr.length; i++){
      x = x + arr[i];
    }
    System.out.println(x);
  }
}
