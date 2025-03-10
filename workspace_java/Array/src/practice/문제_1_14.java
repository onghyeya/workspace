package practice;

public class 문제_1_14 {
  public static void main(String[] args) {
    int[] arr = {7,5,6,7,45,6};
    int[] newArr = new int[arr.length];


    for (int i = 0; i <arr.length; i++){
      newArr[i] = arr[i];
    }

    for (int i = 0; i< newArr.length; i++){
      System.out.print(newArr[i]+" ");
    }


  }
}
